// use SharePreferenced package

Future<bool> tryAutoLogin() async {
  final prefs = await SharedPreferences.getInstance();
  if (!prefs.containsKey('userData')) {
    return false;
  }
  final extractedUserData = json.decode(prefs.getString('userData')) as Map<String, Object>;
  final expiryDate = DateTime.parse(extractedUserData['expiryDate']);

  if (expiryDate.isBefore(DateTime.now())) {
    return false;
  }
  _token = extractedUserData['token'];
  _userId = extractedUserData['userId'];
  _expiryDate = expiryDate;
  notifyListeners();
  _autoLogout();
  return true;
}

// main.dart
home: auth.isAuth
    ? ProductsOverviewScreen()
    : FutureBuilder(
        future: auth.tryAutoLogin(),
        builder: (ctx, authResultSnapshot) =>
            authResultSnapshot.connectionState ==
                    ConnectionState.waiting
                ? SplashScreen()
                : AuthScreen(),
      ),