// dùng animatedBuilder thì sẽ không phải add listener thủ công nữa
AnimatedBuilder(
  animation: _heightAnimation,
  builder: (context, child) => Container(
    // ...
  ),
  child: Form(
    // ...
  )
);