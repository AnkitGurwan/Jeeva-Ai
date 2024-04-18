import React from "react";
import Header from "../Components/header"
import NewForm from "../Components/newForm";
import AllForm from "../Components/allForms";

const Home = () => {
    return (
        <div>
            {/* header of the page */}
            <Header/>

            {/* new form */}
            <NewForm/>

            {/* all forms */}
            <AllForm/>
        </div>
    )
}

export default Home;