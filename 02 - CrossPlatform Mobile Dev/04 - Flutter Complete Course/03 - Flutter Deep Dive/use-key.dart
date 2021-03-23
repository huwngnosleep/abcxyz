class TransactionItem extends StatefulWidget {
  const TransactionItem({
    Key key,
    @required this.transaction,
  }) : super(key: key);
}

ListView(children: transactions.map((item) => 
  TransactionItem(
    key: ValueKey(item.id)
  )
).toList())
