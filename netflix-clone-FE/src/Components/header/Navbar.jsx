import { Button, TextField } from '@mui/material';
import React from 'react';
import './Styles.css';
import { Link } from 'react-router-dom';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import Dropdown from './Dropdown';
import UseNavbar from './UseNavbar';

const Navbar = () => {
    const { navigateToLogin, signOff, authenticated, click, handleClick,
        categories, dropdownCategory, onMouseLeaveCategory, onMouseEnterCategory } = UseNavbar()
    return (
        <header className='header'>
            {/* si no esta despleglado en modo mobile muestra MenuIcon si esta desplegablo muesta el CloseIcon esto solo sirve para modo mobile */}
            <div className="menu-icon" onClick={handleClick}>
                {click ? <CloseIcon /> : <MenuIcon />}
            </div>
            <div className={click ? "navbar_container active" : "navbar_container"} >

                <div className='navbar_item'>
                    <Link to='/' className='navbar_link' onClick={handleClick}>Inicio</Link>
                </div>
                <div className='navbar_item icon' onMouseEnter={onMouseEnterCategory} onMouseLeave={onMouseLeaveCategory}>
                    <Link href='/' className='navbar_link' onClick={handleClick}>Categorias</Link>
                    <div className='navbar_icon'>
                        <ArrowDropDownIcon />
                    </div>
                    {dropdownCategory &&
                        <ul className={click ? 'navbar_dropdown dropdown_clicked' : "navbar_dropdown"}>
                            {
                                categories.map((category, i) => <Dropdown name={category.name} path={category.path} key={i} />)
                            }
                        </ul>
                    }
                </div>
                {authenticated ?
                    <>
                        <div className='navbar_item'>
                            <Link href='/' className='navbar_link' onClick={handleClick}>Favoritos</Link>
                        </div>

                        <div className='navbar_item'>
                            <div className='navbar_action'>
                                <Button variant="contained" type='button' className="navbar" onClick={signOff}>cerrar Sesion</Button>
                            </div>
                        </div>
                    </>
                    : <div className='navbar_item'>
                        <div className='navbar_action'>
                            <Button variant="contained" type='button' className="navbar" onClick={navigateToLogin}>Inciar Sesion</Button>
                        </div>
                    </div>}
                <div className='navbar_item'>
                    <div className='navbar_input'>
                        <TextField label="Buscar Pelicula" variant="outlined" fullWidth />
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Navbar;