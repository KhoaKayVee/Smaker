import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";

export const GET = async () => {
  const pants = [
    {
      id: 37,
      tags: "Pants",
      name: "Trouser Pants ống rộng",
      fit: "Oversized",
      price: "250.000",
      image: "/boinshop/Pants1.jpg",
      materials:
        "Quần mang thương hiệu BoinShop được xuất sứ từ chất liệu cao cấp, mang lại cho người sử dụng cảm giác thoải mái và dễ chịu khi hoạt động. Được thiết kế độc đáo mang phong cách street-wear",
      rating: "4.9",
      totalRating: "36",
      rating5: "30",
      rating4: "2",
      rating3: "2",
      rating2: "2",
      rating1: "0",
    },
    {
      id: 38,
      tags: "Pants",
      name: "Quần shorts kẻ dọc",
      fit: "Oversized",
      price: "150.000",
      image: "/boinshop/Pants2.jpg",
      materials:
        "Quần mang thương hiệu BoinShop được xuất sứ từ chất liệu cao cấp, mang lại cho người sử dụng cảm giác thoải mái và dễ chịu khi hoạt động. Được thiết kế độc đáo mang phong cách street-wear",
      rating: "4.2",
      totalRating: "120",
      rating5: "60",
      rating4: "30",
      rating3: "10",
      rating2: "10",
      rating1: "10",
    },
    {
      id: 39,
      tags: "Pants",
      name: "Combo quần áo kẻ dọc",
      fit: "Oversized",
      price: "300.000",
      image: "/boinshop/Pants3.jpg",
      materials:
        "Quần mang thương hiệu BoinShop được xuất sứ từ chất liệu cao cấp, mang lại cho người sử dụng cảm giác thoải mái và dễ chịu khi hoạt động. Được thiết kế độc đáo mang phong cách street-wear",
      rating: "4.6",
      totalRating: "60",
      rating5: "30",
      rating4: "10",
      rating3: "10",
      rating2: "10",
      rating1: "10",
    },
    {
      id: 40,
      tags: "Pants",
      name: "Quần short đen trơn",
      fit: "Oversized",
      price: "125.000",
      image: "/boinshop/Pants4.jpg",
      materials:
        "Quần mang thương hiệu BoinShop được xuất sứ từ chất liệu cao cấp, mang lại cho người sử dụng cảm giác thoải mái và dễ chịu khi hoạt động. Được thiết kế độc đáo mang phong cách street-wear",
      rating: "4.6",
      totalRating: "70",
      rating5: "30",
      rating4: "20",
      rating3: "10",
      rating2: "5",
      rating1: "5",
    },
    {
      id: 41,
      tags: "Pants",
      name: "Combo bộ quần short 3 màu",
      fit: "Oversized",
      price: "325.000",
      image: "/boinshop/Pants5.jpg",
      materials:
        "Quần mang thương hiệu BoinShop được xuất sứ từ chất liệu cao cấp, mang lại cho người sử dụng cảm giác thoải mái và dễ chịu khi hoạt động. Được thiết kế độc đáo mang phong cách street-wear",
      rating: "4.9",
      totalRating: "100",
      rating5: "80",
      rating4: "5",
      rating3: "5",
      rating2: "5",
      rating1: "5",
    },
    {
      id: 42,
      tags: "Pants",
      name: "Quần short dù đen trơn",
      fit: "Oversized",
      price: "155.000",
      image: "/boinshop/Pants6.jpg",
      materials:
        "Quần mang thương hiệu BoinShop được xuất sứ từ chất liệu cao cấp, mang lại cho người sử dụng cảm giác thoải mái và dễ chịu khi hoạt động. Được thiết kế độc đáo mang phong cách street-wear",
      rating: "4.8",
      totalRating: "50",
      rating5: "30",
      rating4: "5",
      rating3: "5",
      rating2: "5",
      rating1: "5",
    },
    {
      id: 43,
      tags: "Pants",
      name: "Quần short màu con bò cười",
      fit: "Oversized",
      price: "199.000",
      image: "/boinshop/Pants7.jpg",
      materials:
        "Quần mang thương hiệu BoinShop được xuất sứ từ chất liệu cao cấp, mang lại cho người sử dụng cảm giác thoải mái và dễ chịu khi hoạt động. Được thiết kế độc đáo mang phong cách street-wear",
      rating: "4.9",
      totalRating: "30",
      rating5: "30",
      rating4: "0",
      rating3: "0",
      rating2: "0",
      rating1: "0",
    },
    {
      id: 44,
      tags: "Pants",
      name: "Quần short trơn xanh dương",
      fit: "Oversized",
      price: "155.000",
      image: "/boinshop/Pants8.jpg",
      materials:
        "Quần mang thương hiệu BoinShop được xuất sứ từ chất liệu cao cấp, mang lại cho người sử dụng cảm giác thoải mái và dễ chịu khi hoạt động. Được thiết kế độc đáo mang phong cách street-wear",
      rating: "4.9",
      totalRating: "200",
      rating5: "180",
      rating4: "5",
      rating3: "5",
      rating2: "5",
      rating1: "5",
    },
    {
      id: 45,
      tags: "Pants",
      name: "Quần short hồng",
      fit: "Oversized",
      price: "115.000",
      image: "/boinshop/Pants9.jpg",
      materials:
        "Quần mang thương hiệu BoinShop được xuất sứ từ chất liệu cao cấp, mang lại cho người sử dụng cảm giác thoải mái và dễ chịu khi hoạt động. Được thiết kế độc đáo mang phong cách street-wear",
      rating: "4.9",
      totalRating: "150",
      rating5: "130",
      rating4: "5",
      rating3: "5",
      rating2: "5",
      rating1: "5",
    },
    {
      id: 46,
      tags: "Pants",
      name: "Quần short jeans màu washeed",
      fit: "Oversized",
      price: "215.000",
      image: "/boinshop/Pants10.jpg",
      materials:
        "Quần mang thương hiệu BoinShop được xuất sứ từ chất liệu cao cấp, mang lại cho người sử dụng cảm giác thoải mái và dễ chịu khi hoạt động. Được thiết kế độc đáo mang phong cách street-wear",
      rating: "1.3",
      totalRating: "13",
      rating5: "2",
      rating4: "2",
      rating3: "2",
      rating2: "2",
      rating1: "5",
    },
  ];

  return NextResponse.json(pants);
};
