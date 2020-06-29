```js
import React from 'react'

import Modal from '../components/Modal';
import Button from '../components/Button';

import '../components/Modal/style/index.jsx';
import '../components/Button/style/index.jsx';

const [isVisible,setIsVisible] = React.useState(false);
<div>
<button onClick={()=>{
  setIsVisible(true)
  }} type="primary">click me</button>

<Modal 
  title="用户信息"
  onCancel={()=>setIsVisible(false)}
  onOk={()=>setIsVisible(true)}
  isVisible={isVisible}>
  <input/>
</Modal>
</div>
```