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

});
