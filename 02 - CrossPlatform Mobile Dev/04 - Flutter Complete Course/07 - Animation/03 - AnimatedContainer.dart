// dùng cái animatedContainer thì không cần setup controller nữa
child: AnimatedContainer(
  duration: Duration(milliseconds: 300),
  curve: Curves.linear,
  // height: _heightAnimation.value.height,
  height: _isLogin ? 230 : 480,
  constraints: BoxConstraints(
    // minHeight: _heightAnimation.value.height,
    minHeight: _isLogin ? 230 : 480,
  ),
  child: Form(
    // ...
  )