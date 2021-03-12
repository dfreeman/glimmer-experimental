import Component, { hbs1, hbs2 } from '@some-other/package';
import { hbs3 } from '@else/where';

class ComponentA extends Component {
  static template = hbs1`Hello`;
}

class ComponentB extends Component {
  static template = hbs2`Hello`;
}

class ComponentC extends Component {
  static template = hbs3`Hello`;
}
