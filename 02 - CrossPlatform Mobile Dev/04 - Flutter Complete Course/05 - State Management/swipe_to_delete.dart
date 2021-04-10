Dismissible(
        direction: DismissDirection.endToStart,
        key: ValueKey(id),
        // onDismissed luôn nhận direction làm argument
        onDismissed: (direction) {
          Provider.of<Cart>(context, listen: false).removeItem(productId);
        },
        background: Container(
          child: Icon(
            Icons.delete,
            color: Colors.white,
            size: 40,
          ),
          alignment: Alignment.centerRight,
          color: Theme.of(context).errorColor,
          padding: EdgeInsets.only(right: 20),
        ),