import React from 'react';
import ExampleComponent from '.';

describe('<ExampleComponent />', () => {
  test('deve estar declarado', () => {
    global.shallow(<ExampleComponent />);
  });
});
