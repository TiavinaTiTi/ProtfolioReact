import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <div className='sidebar'>
            <div className='id'>
                <div className='idContent'>
                    <img src='./media/billGates.jpg' alt='profil pic' />
                    <h3>Tiavina Randrianoelison</h3>
                </div>
            </div>

            <div className='navigation'>
                <ul>
                    <li>
                        <NavLink exact='true' to="/" activeclassname='navActive'>
                            <i className="bi bi-house"></i>
                            <span>Accueil</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink exact='true' to="/competences" activeclassname='navActive'>
                            <i className="bi bi-lightning"></i>
                            <span>Competence</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink exact='true' to="/portfolio" activeclassname='navActive'>
                            <i className="bi bi-person-circle"></i>
                            <span>Portfolio</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink exact='true' to="/contact" activeclassname='navActive'>
                            <i className="bi bi-person-rolodex"></i>
                            <span>Contact</span>
                        </NavLink>
                    </li>
                </ul>
            </div>

            <div className='socialNetwork'>
                <ul>
                    <li>
                        <a href='https://www.linkedin.com' target="_blank" rel='noopener noreferrer'><i class="bi bi-facebook"></i></a>
                    </li>
                    <li>
                        <a href='https://www.github.com' target="_blank" rel='noopener noreferrer'><i class="bi bi-github"></i></a>
                    </li>
                    <li>
                        <a href='https://www.skype.com' target="_blank" rel='noopener noreferrer'><i class="bi bi-skype"></i></a>
                    </li>
                </ul>
                <div className='signature'>
                    <p>Copy 2022 || Madagascar</p>
                </div>
            </div>
        </div>
    );
};

export default Navigation;