this.handleClick = this.handleClick.bind(this); // trong constructor

// sở dĩ dòng code trên phải bind(this) là vì khi gọi handleClick ở ngoài constructor 
// thì cái this của nó sẽ bị undefined nên phải bind(this) vào là vì như thế