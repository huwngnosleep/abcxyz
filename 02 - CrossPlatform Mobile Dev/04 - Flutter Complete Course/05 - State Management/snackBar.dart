ScaffoldMessenger.of(context).hideCurrentSnackBar();
ScaffoldMessenger.of(context).showSnackBar(SnackBar(
  content: Text('Added item to cart!'),
  duration: Duration(seconds: 2),
  action: SnackBarAction(
    label: 'UNDO',
    onPressed: () {
      cart.removeSingleItem(product.id);
    },
  ),
));