// có thể config nhiều loại màu trong app qua một argument khi build

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Personal Expenses',
      theme: ThemeData(
        // dùng primarySwatch thay cho primaryColor là vì nó có nhiều shape khác nhau
        // ví dụ như primaryColorDark, ...Light, ...
        primarySwatch: Colors.purple,
        accentColor: Colors.amber,
      ),
      home: HomePage(),
    );
  }
}