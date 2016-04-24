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

  it('should render connection time container with time', () => {
    
    const conn = {from: {time: '2016-04-24T22:30:00+03:00'}, to: {time: '2016-04-24T23:20:00+03:00'}};
    const renderedComponent = shallow(<ConnectionCard connection={conn}/>);

    expect(renderedComponent.first().childAt(0).childAt(1).props().className).to.eql('connection-time');
    expect(renderedComponent.first().childAt(0).childAt(1).text()).to.eql('22:30 - 23:20');
  });

});
