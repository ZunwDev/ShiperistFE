import React, { Fragment } from 'react';
import {
  Category,
  Component,
  Palette,
  Variant
} from '@react-buddy/ide-toolbox-next';

export const PaletteTree = () => (
  <Palette>
    <Category name="App">
      <Component name="Loader">
        <Variant>
          <ExampleLoaderComponent />
        </Variant>
      </Component>
    </Category>
  </Palette>
);

export function ExampleLoaderComponent() {
  return <Fragment>Loading...</Fragment>;
}
