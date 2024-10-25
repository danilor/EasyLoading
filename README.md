# EasyLoading

Another Loading Library for React and Angular, easy to use, small footprint, and high performance.

## Features

 * Different types of animations for the loading element
 * Color customization
 * Easy to use
 * Small footprint
 * High performance
 * Support for Angular and React

## Installation

```bash

npm install https://github.com/danilor/EasyLoading --save

```

## Quick Start - Web
    
    ```html

        <script type="text/javascript" src="./../dist/easyloading.umd.js"></script>
        <script type="text/javascript">
            const EasyLoadingObject = new EasyLoading.EasyLoading();
            EasyLoadingObject.setConfig({
                color: 'red',
                backgroundColor: 'rgba(68, 88, 219,0.7)',
            })
            function displaysExample(){
                EasyLoadingObject.show('Custom Loading Text');
            }
        </script>

    ```

## Quick Start - React

    ```typescript

        import React, { useEffect } from 'react';
        import logo from './logo.svg';
        import './App.css';
        import { EasyLoading } from 'easy_loading';
        
        function App() {
        
            useEffect(()=>{
                const el = new EasyLoading();
                el.show('Testing Loading');
            },[]);
            
            return (
                <div className="App">
                    <header className="App-header">
                        <img src={logo} className="App-logo" alt="logo" />
                        <p>
                        Edit <code>src/App.tsx</code> and save to reload.
                        </p>
                        <a
                        className="App-link"
                        href="https://reactjs.org"
                        target="_blank"
                        rel="noopener noreferrer"
                        >
                        Learn React
                        </a>
                    </header>
                </div>
            );
        }

        export default App;
    ```

## Methods

### setConfig

Change the default configuration of the loading element.

```typescript

    setConfig(config: EasyLoadingConfig): void;

```

### show

Displays the loading element.

```typescript

    show(text?: string): void;

```

### hide

Hides the loading element.

```typescript

    hide(): void;

```

## Configuration Options

Param: config
Configuration object

Param: config.text
Text to display

Param: config.id
Id of the loading element

Param: config.extraClass
Extra class to add to the loading element

Param: config.loadingType
Type of loading element

Param: config.styleId
Id of the style element

Param: config.color
Color of the loading element. Default to #FFFFFF

Param: config.backgroundColor
Background color of the loading element. Default to rgba(0, 0, 0, 0.7)


## Docs

For more information please refer to the DOCS folder in this repository.

## Questions/issues/comments

Please don't hesitate to open an issue in the repository for any questions, issues or comments.

