import React, { useState } from 'react';
import { AccordionProps } from '../types/accordionTypes';

/**
 * Accordion component to display a list of items with expandable/collapsible content.
 * @param items - Array of items to display in the accordion.
 * @param singleOpen - If true, only one item can be open at a time.
 * 
 * Each item should have:
 * - `title`: The title to be displayed for the accordion item.
 * - `content`: The content to be displayed when the item is expanded.
 */
const Accordion: React.FC<AccordionProps> = ({ items, singleOpen = false }) => {
  // State to keep track of the open indexes of accordion items
  const [openIndexes, setOpenIndexes] = useState<number[]>([]);

  /**
   * Handles the click event on an accordion item.
   * @param index - Index of the clicked accordion item.
   */
  const handleItemClick = (index: number) => {
    if (singleOpen) {
      // If singleOpen is true, toggle the item at the clicked index
      setOpenIndexes(openIndexes.includes(index) ? [] : [index]);
    } else {
      // If singleOpen is false, toggle the item at the clicked index
      setOpenIndexes(
        openIndexes.includes(index)
          ? openIndexes.filter((i) => i !== index)  // Close the item if it's already open
          : [...openIndexes, index]  // Open the item if it's not open
      );
    }
  };

  return (
    <div className="w-full max-w-lg mx-auto my-5 border border-gray-300 rounded-lg">
      {items.map((item, index) => (
        <div key={index}>
          <button
            className="w-full px-4 py-2 text-left bg-gray-100 border-b border-gray-300 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            onClick={() => handleItemClick(index)}
          >
            {item.title}
          </button>
          {openIndexes.includes(index) && (
            <div className="px-4 py-2 bg-white border-b border-gray-300">
              <pre className="whitespace-pre-wrap break-words">{item.content}</pre>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordion;
