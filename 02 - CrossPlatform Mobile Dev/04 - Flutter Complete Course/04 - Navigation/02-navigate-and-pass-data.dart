// khi navigate thì truyền params vào trong constructor của cái screen sẽ navigate đến là được
Navigator.of(context).push(
  MaterialPageRoute(
    // chỗ này sẽ nhận cái context làm argument, nhưng không dùng nên đặt gạch dưới
    builder: (_) {
      return DestinationScreen(param1, param2)
    }
  )
)