import React from "react"
import backIcon from "../../assets/images/logo.svg"
import logoImg from "../../assets/images/icons/back.svg"
import { Link } from "react-router-dom"
import './style.css'


interface PageHeaderProps {
    title?: string;
    description?: string;
}

const PageHeader: React.FunctionComponent<PageHeaderProps> = (props) => {
    return (
        <header className="page-header">
            <div className="top-bar-container">
                <Link to="/">
                    <img src={backIcon} alt="Voltar" />
                </Link>
                <Link to="/">
                    <img src={logoImg} alt="Proffy" />
                </Link>
            </div>

            <div className="header-content">
                <strong>{props.title}</strong>
                {props.description && <strong>{props.description}</strong>}
            </div>
        </header>
    )
}

export default PageHeader;