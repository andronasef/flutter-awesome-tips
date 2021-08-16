import 'package:flutter/material.dart';
import 'package:get/get.dart';

import 'components/view.dart';

Future<void> main() async {
  runApp(App());
}

class App extends StatelessWidget {
  const App({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return GetMaterialApp(
      home: View(),
      // theme: ThemeData.dark().copyWith(),
    );
  }
}
