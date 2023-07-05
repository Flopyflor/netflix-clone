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
    const { navigateToLogin, navigateToSearch, signOff, authenticated, click, handleClick,
        categories, dropdownCategory, onMouseLeaveCategory, onMouseEnterCategory } = UseNavbar()

    return (
        <header className='header'>
            {/* si no esta despleglado en modo mobile muestra MenuIcon si esta desplegablo muesta el CloseIcon esto solo sirve para modo mobile */}
            <div className="menu-icon" onClick={handleClick}>
                {click ? <CloseIcon /> : <MenuIcon />}
            </div>
            <div className={click ? "navbar_container active" : "navbar_container"} >

                <Link to='/' className='navbar_link' onClick={handleClick}>
                    <div className='navbar_item'>Inicio</div>
                </Link>


                <div className='navbar_item icon' onMouseEnter={onMouseEnterCategory} onMouseLeave={onMouseLeaveCategory}>
                    <Link href='/' className='navbar_link' onClick={handleClick}>Categorias</Link>
                    <div className='navbar_icon'>
                        <ArrowDropDownIcon />
                    </div>
                    {dropdownCategory &&
                        <ul className={click ? 'navbar_dropdown dropdown_clicked' : "navbar_dropdown"}>
                            {
                                categories.map((category) => <Dropdown name={category.name} path={category.id} key={category.id} />)
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
                        <TextField label="Buscar Pelicula" variant="outlined" fullWidth onKeyDown={navigateToSearch} autoComplete='false'/>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Navbar;