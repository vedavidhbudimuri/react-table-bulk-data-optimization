import { createContext } from "react";
import stores from ".";

const TableStoreContext = createContext(stores.tableStore);

export { TableStoreContext };
