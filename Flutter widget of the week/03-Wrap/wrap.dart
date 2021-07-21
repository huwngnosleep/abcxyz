// Wrap is a widget allowing you to create flow layout like web
// Wrap is like Row or Column

Wrap(
  direction: Axis.vertical,
  alignment: WrapAlignment.end,
  spacing: 10.0,
  runSpacing: 20.0,
  children: [
    MyWidget(),
    MyWidget(),
  ]
)