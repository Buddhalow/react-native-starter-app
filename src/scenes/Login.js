import React from 'react';
import { Actions } from 'react-native-router-flux';
import FormRender from '../components/ui/FormRender';

export default props => (<FormRender
  {...props}
  submit={formData => Actions.doAuth({ email: formData.Email, password: formData.Password })}
/>);
