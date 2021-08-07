import 'package:flutter/material.dart';
import 'package:flutter_svg/flutter_svg.dart';
import 'package:get/get.dart';

import '../consts.dart';

class Header extends StatelessWidget {
  const Header({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Container(
      height: 70,
      // color: mainColor,
      child: Row(
        children: [
          SvgPicture.asset("assets/flutter.svg",
              color: Colors.white,
              height: 30,
              width: 30,
              semanticsLabel: 'Acme Logo'),
          Text("Flutter Tips"),
          Spacer(),
          Container(
            width: Get.width * .15,
            child: Row(
              mainAxisAlignment: MainAxisAlignment.spaceAround,
              children: [
                Text("data"),
                Text("data"),
                Icon(Icons.add),
                Icon(Icons.add)
              ],
            ),
          )
        ],
      ),
    );
  }
}
