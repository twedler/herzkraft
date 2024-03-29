// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator';
// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type';
// Then we give our schema to the builder and provide the result to Sanity

import herzkraft from './herzkraft';
import latenight from './latenight';
import yin from './yin';
import event from './event';
import latenightEvent from './latenightEvent';
import yinEvent from './yinEvent';
import price from './price';
import latenightPrice from './latenightPrice';
import yinPrice from './yinPrice';
import post from './post';

export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    herzkraft,
    latenight,
    yin,
    event,
    latenightEvent,
    yinEvent,
    price,
    latenightPrice,
    yinPrice,
    post,
  ]),
});
