import React from 'react';
import { render } from '@testing-library/react';

import renderer from "react-test-renderer";
import Information, {style} from './../Information'

test('Первоначальные параметры ', () => {
    var test;
  const component = renderer.create(<Information />);
    renderer.act(() => {
    const element = component.toJSON();
    console.log(element.children[1]);
      test = element.children[1].children[1];
    });
    expect(test).toMatch('Fetching...');
});
test('Стиль должен что-то содержать', () => {
    const test = style;

    expect(test).toBeNotNull;
});