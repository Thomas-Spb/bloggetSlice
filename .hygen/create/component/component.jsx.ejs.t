---
to: <%= absPath %>/<%= component_name %>.jsx
---
import cls from './<%= component_name %>.module.css';

export const <%= component_name %> = () => {
    console.log(cls);
  return <div></div>
};