import {useContext} from "react";
import BooksContext from "../components/provider/books";

function useBookContext(){
    return useContext(BooksContext);
}

export default useBookContext;
