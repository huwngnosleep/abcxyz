var containerHeight = 300;
  AnimationController _controller;
  Animation<Size> _heightAnimation;

  @override
  void initState() {
    super.initState();
    _controller =
        AnimationController(vsync: this, duration: Duration(milliseconds: 600));
    _heightAnimation = Tween<Size>(
            begin: Size(double.infinity, 300), end: Size(double.infinity, 600))
        .animate(CurvedAnimation(parent: _controller, curve: Curves.linear));
    // setState để rerender lại mỗi khi animation thay đổi
    _heightAnimation.addListener(() {
      setState(() {});
    });
  }
  
  @override
  void dispose() {
    super.dispose();
    _controller.dispose();
  }

  void _switchLoginMode() {
      setState(() {
        _isLogin = !_isLogin;
        if (!_isLogin) {
          // start animation
          _controller.forward();
        } else {
          _controller.reverse();
        }
      });
    }

  child: Container(
    height: _heightAnimation.value.height,
    constraints: BoxConstraints(minHeight: _heightAnimation.value.height),