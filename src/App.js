import React from 'react'
import styled, {ThemeProvider} from 'styled-components'
import './App.css';
import Container from "./Container";


export const Content = styled.div`
  display: flex;
  flex-direction:column;
  align-items: center;
  justify-content: space-evenly;
  height: 100vh;
  background-color: ${props => props.theme.bgColor};
  color: ${props => props.theme.textColor};
`
const Buttons = styled.div`
  position: absolute;
  left: 20px;
  top: 20px;
  color: ${props => props.theme.textColor};
`;

const themes = {
    dark: {
        bgColor: '#222',
        textColor: '#fff',
        boxColor: 'grey'
    },
    light: {
        bgColor: '#BDF5F4',
        textColor: '#222',
        boxColor:'#F1DA7B',
        boxColor1:'#40C382',
        textColorIcon:'#72A4E8'
    }
};

const ThemeToggle = ({children, themeName}) => {
    const defaultTheme = themeName === 'dark' ? themes.dark : themes.light
    const [theme, setTheme] = React.useState(defaultTheme)

    const onChangeTheme = ({target}) => {
        setTheme(target.value === 'dark' ? themes.dark : themes.light)
    };

    return (
        <ThemeProvider theme={theme}>
                {children}
                <Toggler onChange={onChangeTheme} currentTheme={themeName}/>
        </ThemeProvider>
    )
};

const Toggler = ({onChange, currentTheme}) => (
    <Buttons>
        <input type="radio" name="theme" value="dark" onChange={onChange}
               defaultChecked={currentTheme === 'dark'}/> Dark

        <input type="radio" name="theme" value="light" onChange={onChange}
               defaultChecked={currentTheme === 'light'}/> Light
    </Buttons>
);

export default class App extends React.Component {
    render() {
        return (
            <ThemeToggle themeName='dark'>
                    <Container/>
            </ThemeToggle>
        )
    }
}