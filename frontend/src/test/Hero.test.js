import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';
import Hero from '../landing_page/home/Hero';
//Test Suite 

describe('Hero Component',()=>{
    test('render hero image',()=>{
        render(<MemoryRouter><Hero/></MemoryRouter>);
        const heroImage=screen.getByAltText('Hero Image');
        expect(heroImage).toBeInTheDocument();
        expect(heroImage).toHaveAttribute('src','media/images/homeHero.png');

    })

    test('render signup button',()=>{
        render(<MemoryRouter><Hero/></MemoryRouter>);
        const signupButton=screen.getByRole('button',{name:/signup now/i});
        expect(signupButton).toBeInTheDocument();
        expect(signupButton).toHaveTextContent('SignUp Now');
        const signupLink=screen.getByRole('link',{name:/signup now/i});
        expect(signupLink).toHaveAttribute('href','/signup');
    })
})