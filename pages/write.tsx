import {NextPage} from "next";
import {TextField} from "@material-ui/core";
import {MainLayout} from "../layouts/MainLayout";
import {WriteForm} from "../components/WriteForm";

const WritePage: NextPage = () => {

    return (
        <MainLayout className={"main-layout-white"}  hideMenu hideComments>
            <WriteForm   />
        </MainLayout>
    )
}

export default WritePage