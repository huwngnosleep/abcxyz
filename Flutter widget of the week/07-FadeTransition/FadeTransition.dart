FadeTransition(
  opacity: animation,
  child: Text(widget.text)
)

final controller = AnimationController(
  vsync: this,
  duration: Duration(seconds: 2)
)

final animation = Tween(
  begin: 0.0,
  end: 1.0,
).animate(controller)

controller.forward()