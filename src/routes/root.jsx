import { BrowserRouter,Route, Routes } from "react-router-dom";
import NumberCounter from "../component/NumberCounter";
const Root = () =>{
return(
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<NumberCounter />}/>

    </Routes>
    </BrowserRouter>
)}

export default Root;