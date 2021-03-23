// layout builder giúp lấy size theo phần trăm của parent
return LayoutBuilder(builder: (ctx, constraint) {
  return Container(
    width: constraint.maxHeight * 0.7,
  )
})