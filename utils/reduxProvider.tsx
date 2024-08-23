"use client";

import { Provider } from 'react-redux';
import store from '../redux/store';

/**
 * ReduxProvider component that wraps the application with the Redux store provider.
 * @param children - The child components that will have access to the Redux store.
 * @returns {JSX.Element} The component wrapped with the Redux Provider.
 */
const ReduxProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default ReduxProvider;
