import React from 'react';
import Paper from 'material-ui/lib/paper';
import ConnectionCard from '../../app/components/connection-card.jsx';

import { shallow } from 'enzyme';
import { expect } from 'chai';

describe('ConnectionCard Component', () => {

  it('should render first element as Paper', () => {
    const renderedComponent = shallow(<ConnectionCard />);
    expect(renderedComponent.first().type()).to.eql(Paper);
  });

  it('should render container for connection details', () => {

    const renderedComponent = shallow(<ConnectionCard />);

    expect(renderedComponent.first().childAt(0).props().className).to.eql('connection-card-container');
    expect(renderedComponent.first().childAt(0).type()).to.eql('div');
  });

  it('should render connection container with place names', () => {

    const conn = {from: {name: 'Nummela'}, to: {name: 'Helsinki'}};
    const renderedComponent = shallow(<ConnectionCard connection={conn}/>);

    expect(renderedComponent.first().childAt(0).childAt(0).props().className).to.eql('connection');
    expect(renderedComponent.first().childAt(0).childAt(0).text()).to.eql('Nummela-Helsinki');
  });

});
