// Like AnimatedContainer, Opacity can change its opacity with transition animation

Stack(
  children: [
    MyImage(),
    Opacity(
      opacity: _myOpacity,
      child: MyGradientWidget(),
    )
  ]
)
