import * as React from 'react';
import { Button, Form, Input } from '@devoinc/genesys-ui';

export const FormExample = () => (
  <Form>
    <Form.Group
      legend="Group one"
      helper="This is the helper for the form group."
      hasFloatingHelper
    >
      <Input label="Field one" id="field-one" />
      <Input label="Field two" id="field-two" />
      <Form.Group direction="row" alignItems="flex-end">
        <Form.Item flex="1 1 auto">
          <Input label="Field three" id="field-three" />
        </Form.Item>
        <Form.Item>
          <Input label="Field four" id="field-four" />
        </Form.Item>
        <Button>Add</Button>
      </Form.Group>
    </Form.Group>
  </Form>
);
