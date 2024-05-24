import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";

export const GET = async () => {
  const allCollections = [
    {
      id: 1,
      tags: "Tshirts",
      name: "Áo thun ovs from unisex cho cả nam và nữ",
      fit: "Oversized",
      price: "250.000",
      image: "/boinshop/Aothun1.jpg",
      materials:
        "Áo mang thương hiệu BoinShop được xuất sứ từ chất liệu cao cấp, mang lại cho người sử dụng cảm giác thoải mái và dễ chịu khi hoạt động. Được thiết kế độc đáo mang phong cách street-wear",
      rating: "4.8",
      totalRating: "50",
      rating5: "30",
      rating4: "5",
      rating3: "5",
      rating2: "5",
      rating1: "5",
    },
    {
      id: 2,
      tags: "Tshirts",
      name: "Áo thun ovs from unisex cho cả nam và nữ",
      fit: "Oversized",
      price: "250.000",
      image: "/boinshop/Aothun2.jpg",
      materials:
        "Áo mang thương hiệu BoinShop được xuất sứ từ chất liệu cao cấp, mang lại cho người sử dụng cảm giác thoải mái và dễ chịu khi hoạt động. Được thiết kế độc đáo mang phong cách street-wear",
      rating: "4.8",
      totalRating: "60",
      rating5: "40",
      rating4: "5",
      rating3: "5",
      rating2: "5",
      rating1: "5",
    },
    {
      id: 3,
      tags: "Tshirts",
      name: "Áo thun ovs from unisex cho cả nam và nữ",
      fit: "Oversized",
      price: "200.000",
      image: "/boinshop/Aothun3.jpg",
      materials:
        "Áo mang thương hiệu BoinShop được xuất sứ từ chất liệu cao cấp, mang lại cho người sử dụng cảm giác thoải mái và dễ chịu khi hoạt động. Được thiết kế độc đáo mang phong cách street-wear",
      rating: "4.8",
      totalRating: "70",
      rating5: "30",
      rating4: "20",
      rating3: "10",
      rating2: "5",
      rating1: "5",
    },
    {
      id: 4,
      tags: "Tshirts",
      name: "Áo thun hình con gấu OVS Nam Nữ",
      fit: "Oversized",
      price: "200.000",
      image: "/boinshop/Aothun4.jpg",
      materials:
        "Áo mang thương hiệu BoinShop được xuất sứ từ chất liệu cao cấp, mang lại cho người sử dụng cảm giác thoải mái và dễ chịu khi hoạt động. Được thiết kế độc đáo mang phong cách street-wear",
      rating: "4.8",
      totalRating: "100",
      rating5: "30",
      rating4: "20",
      rating3: "20",
      rating2: "20 ",
      rating1: "10",
    },
    {
      id: 5,
      tags: "Tshirts",
      name: "Áo thun trơn đen OVS cho Nam Nữ",
      fit: "Oversized",
      price: "150.000",
      image: "/boinshop/Aothun5.jpg",
      materials:
        "Áo mang thương hiệu BoinShop được xuất sứ từ chất liệu cao cấp, mang lại cho người sử dụng cảm giác thoải mái và dễ chịu khi hoạt động. Được thiết kế độc đáo mang phong cách street-wear",
      rating: "4.8",
      totalRating: "120",
      rating5: "40",
      rating4: "20",
      rating3: "40",
      rating2: "10",
      rating1: "10",
    },
    {
      id: 6,
      tags: "Tshirts",
      name: "Áo thun hình chữ S và trơn OVS",
      fit: "Oversized",
      price: "150.000",
      image: "/boinshop/Aothun6.jpg",
      materials:
        "Áo mang thương hiệu BoinShop được xuất sứ từ chất liệu cao cấp, mang lại cho người sử dụng cảm giác thoải mái và dễ chịu khi hoạt động. Được thiết kế độc đáo mang phong cách street-wear",
      rating: "4.8",
      totalRating: "210",
      rating5: "50",
      rating4: "60",
      rating3: "50",
      rating2: "40",
      rating1: "10",
    },
    {
      id: 7,
      tags: "Tshirts",
      name: "Áo thun trơn mặt sau OVS",
      fit: "Oversized",
      price: "180.000",
      image: "/boinshop/Aothun7.jpg",
      materials:
        "Áo mang thương hiệu BoinShop được xuất sứ từ chất liệu cao cấp, mang lại cho người sử dụng cảm giác thoải mái và dễ chịu khi hoạt động. Được thiết kế độc đáo mang phong cách street-wear",
      rating: "4.8",
      totalRating: "105",
      rating5: "30 ",
      rating4: "55",
      rating3: "15",
      rating2: "5",
      rating1: "0",
    },
    {
      id: 8,
      tags: "Tshirts",
      name: "Áo thun trơn mặt sau OVS",
      fit: "Oversized",
      price: "180.000",
      image: "/boinshop/Aothun8.jpg",
      materials:
        "Áo mang thương hiệu BoinShop được xuất sứ từ chất liệu cao cấp, mang lại cho người sử dụng cảm giác thoải mái và dễ chịu khi hoạt động. Được thiết kế độc đáo mang phong cách street-wear",
      rating: "4.8",
      totalRating: "140",
      rating5: "90",
      rating4: "10",
      rating3: "10",
      rating2: "10",
      rating1: "20",
    },
    {
      id: 9,
      tags: "Tshirts",
      name: "Áo thun OVS mặt sau hình gấu ",
      fit: "Oversized",
      price: "450.000",
      image: "/boinshop/Aothun9.jpg",
      materials:
        "Áo mang thương hiệu BoinShop được xuất sứ từ chất liệu cao cấp, mang lại cho người sử dụng cảm giác thoải mái và dễ chịu khi hoạt động. Được thiết kế độc đáo mang phong cách street-wear",
      rating: "4.8",
      totalRating: "30",
      rating5: "10",
      rating4: "5",
      rating3: "5",
      rating2: "5",
      rating1: "5",
    },
    {
      id: 10,
      tags: "Tshirts",
      name: "Áo thun trơn UNISEX",
      fit: "Oversized",
      price: "390.000",
      image: "/boinshop/Aothun10.jpg",
      materials:
        "Áo mang thương hiệu BoinShop được xuất sứ từ chất liệu cao cấp, mang lại cho người sử dụng cảm giác thoải mái và dễ chịu khi hoạt động. Được thiết kế độc đáo mang phong cách street-wear",
      rating: "4.8",
      totalRating: "55",
      rating5: "25",
      rating4: "15",
      rating3: "5",
      rating2: "5",
      rating1: "5",
    },
    {
      id: 11,
      tags: "Tshirts",
      name: "Nolife Tshirt xanh dương",
      fit: "Oversized",
      price: "330.000",
      image: "/boinshop/Aothun11.jpg",
      materials:
        "Áo mang thương hiệu BoinShop được xuất sứ từ chất liệu cao cấp, mang lại cho người sử dụng cảm giác thoải mái và dễ chịu khi hoạt động. Được thiết kế độc đáo mang phong cách street-wear",
      rating: "4.8",
      totalRating: "83",
      rating5: "53",
      rating4: "10",
      rating3: "10",
      rating2: "5",
      rating1: "5",
    },
    {
      id: 12,
      tags: "Tshirts",
      name: "Nolife Tshirt màu đen",
      fit: "Oversized",
      price: "330.000",
      image: "/boinshop/Aothun12.jpg",
      materials:
        "Áo mang thương hiệu BoinShop được xuất sứ từ chất liệu cao cấp, mang lại cho người sử dụng cảm giác thoải mái và dễ chịu khi hoạt động. Được thiết kế độc đáo mang phong cách street-wear",
      rating: "4.8",
      totalRating: "98",
      rating5: "58",
      rating4: "10",
      rating3: "10",
      rating2: "5",
      rating1: "5",
    },
    {
      id: 13,
      tags: "Tshirts",
      name: "Combo áo Nolife Tshirt",
      fit: "Oversized",
      price: "600.000",
      image: "/boinshop/Aothun13.jpg",
      materials:
        "Áo mang thương hiệu BoinShop được xuất sứ từ chất liệu cao cấp, mang lại cho người sử dụng cảm giác thoải mái và dễ chịu khi hoạt động. Được thiết kế độc đáo mang phong cách street-wear",
      rating: "4.8",
      totalRating: "98",
      rating5: "5",
      rating4: "15",
      rating3: "20",
      rating2: "20",
      rating1: "38",
    },
    {
      id: 14,
      tags: "Tshirts",
      name: "Tshirt Nolife đỏ",
      fit: "Oversized",
      price: "330.000",
      image: "/boinshop/Aothun14.jpg",
      materials:
        "Áo mang thương hiệu BoinShop được xuất sứ từ chất liệu cao cấp, mang lại cho người sử dụng cảm giác thoải mái và dễ chịu khi hoạt động. Được thiết kế độc đáo mang phong cách street-wear",
      rating: "4.8",
      totalRating: "82",
      rating5: "42",
      rating4: "32",
      rating3: "4",
      rating2: "2",
      rating1: "2",
    },
    {
      id: 15,
      tags: "Tshirts",
      name: "Áo thun hình xe buýt OVS",
      fit: "Oversized",
      price: "350.000",
      image: "/boinshop/Aothun15.jpg",
      materials:
        "Áo mang thương hiệu BoinShop được xuất sứ từ chất liệu cao cấp, mang lại cho người sử dụng cảm giác thoải mái và dễ chịu khi hoạt động. Được thiết kế độc đáo mang phong cách street-wear",
      rating: "4.8",
      totalRating: "56",
      rating5: "36",
      rating4: "5",
      rating3: "5",
      rating2: "5",
      rating1: "5",
    },
    {
      id: 16,
      tags: "Tshirts",
      name: "Áo thun RACING OVS",
      fit: "Oversized",
      price: "380.000",
      image: "/boinshop/Aothun16.jpg",
      materials:
        "Áo mang thương hiệu BoinShop được xuất sứ từ chất liệu cao cấp, mang lại cho người sử dụng cảm giác thoải mái và dễ chịu khi hoạt động. Được thiết kế độc đáo mang phong cách street-wear",
      rating: "4.8",
      totalRating: "55",
      rating5: "10",
      rating4: "35",
      rating3: "5",
      rating2: "5",
      rating1: "0",
    },
    {
      id: 17,
      tags: "Tshirts",
      name: "Áo thun hình graphic mặt quỷ",
      fit: "Oversized",
      price: "390.000",
      image: "/boinshop/Aothun17.jpg",
      materials:
        "Áo mang thương hiệu BoinShop được xuất sứ từ chất liệu cao cấp, mang lại cho người sử dụng cảm giác thoải mái và dễ chịu khi hoạt động. Được thiết kế độc đáo mang phong cách street-wear",
      rating: "4.8",
      totalRating: "85",
      rating5: "20",
      rating4: "30",
      rating3: "15",
      rating2: "10",
      rating1: "10",
    },
    {
      id: 18,
      tags: "Tshirts",
      name: "Áo thun mặt sau in hình OVS màu đen",
      fit: "Oversized",
      price: "390.999",
      image: "/boinshop/Aothun18.jpg",
      materials:
        "Áo mang thương hiệu BoinShop được xuất sứ từ chất liệu cao cấp, mang lại cho người sử dụng cảm giác thoải mái và dễ chịu khi hoạt động. Được thiết kế độc đáo mang phong cách street-wear",
      rating: "4.8",
      totalRating: "140",
      rating5: "30",
      rating4: "50",
      rating3: "40",
      rating2: "20",
      rating1: "0",
    },
    {
      id: 19,
      tags: "Tshirts",
      name: "Áo thun mặt sau in hình OVS màu trắng",
      fit: "Oversized",
      price: "399.000",
      image: "/boinshop/Aothun19.jpg",
      materials:
        "Áo mang thương hiệu BoinShop được xuất sứ từ chất liệu cao cấp, mang lại cho người sử dụng cảm giác thoải mái và dễ chịu khi hoạt động. Được thiết kế độc đáo mang phong cách street-wear",
      rating: "4.8",
      totalRating: "170",
      rating5: "30",
      rating4: "50",
      rating3: "50",
      rating2: "30",
      rating1: "10",
    },
    {
      id: 20,
      tags: "Tshirts",
      name: "Áo thun in hình chúa OVS",
      fit: "Oversized",
      price: "399.000",
      image: "/boinshop/Aothun20.jpg",
      materials:
        "Áo mang thương hiệu BoinShop được xuất sứ từ chất liệu cao cấp, mang lại cho người sử dụng cảm giác thoải mái và dễ chịu khi hoạt động. Được thiết kế độc đáo mang phong cách street-wear",
      rating: "4.8",
      totalRating: "30",
      rating5: "30",
      rating4: "0",
      rating3: "0",
      rating2: "0",
      rating1: "0",
    },
    {
      id: 21,
      tags: "Tshirts",
      name: "Áo thun in slogan mặt sau",
      fit: "Oversized",
      price: "366.000",
      image: "/boinshop/Aothun21.jpg",
      materials:
        "Áo mang thương hiệu BoinShop được xuất sứ từ chất liệu cao cấp, mang lại cho người sử dụng cảm giác thoải mái và dễ chịu khi hoạt động. Được thiết kế độc đáo mang phong cách street-wear",
      rating: "4.8",
      totalRating: "82",
      rating5: "72",
      rating4: "5",
      rating3: "5",
      rating2: "0",
      rating1: "0",
    },
    {
      id: 22,
      tags: "Tshirts",
      name: "Áo thun in hình chúa OVS",
      fit: "Oversized",
      price: "399.000",
      image: "/boinshop/Aothun22.jpg",
      materials:
        "Áo mang thương hiệu BoinShop được xuất sứ từ chất liệu cao cấp, mang lại cho người sử dụng cảm giác thoải mái và dễ chịu khi hoạt động. Được thiết kế độc đáo mang phong cách street-wear",
      rating: "4.8",
      totalRating: "67",
      rating5: "37",
      rating4: "10",
      rating3: "10",
      rating2: "0",
      rating1: "10",
    },
    {
      id: 23,
      tags: "Tshirts",
      name: "Áo thun in SLOGAN mặt trước",
      fit: "Oversized",
      price: "250.000",
      image: "/boinshop/Aothun23.jpg",
      materials:
        "Áo mang thương hiệu BoinShop được xuất sứ từ chất liệu cao cấp, mang lại cho người sử dụng cảm giác thoải mái và dễ chịu khi hoạt động. Được thiết kế độc đáo mang phong cách street-wear",
      rating: "4.8",
      totalRating: "141",
      rating5: "20",
      rating4: "50",
      rating3: "51",
      rating2: "10",
      rating1: "10",
    },
    {
      id: 24,
      tags: "Tshirts",
      name: "Áo thun chữ 7 sắc mặt sau",
      fit: "Oversized",
      price: "250.000",
      image: "/boinshop/Aothun24.jpg",
      materials:
        "Áo mang thương hiệu BoinShop được xuất sứ từ chất liệu cao cấp, mang lại cho người sử dụng cảm giác thoải mái và dễ chịu khi hoạt động. Được thiết kế độc đáo mang phong cách street-wear",
      rating: "4.8",
      totalRating: "10",
      rating5: "2",
      rating4: "0",
      rating3: "2",
      rating2: "2",
      rating1: "4",
    },

    // Shirts
    {
      id: 25,
      tags: "Shirts",
      name: "Varsity Jacket Black-White",
      fit: "Oversized",
      price: "550.000",
      image: "/boinshop/Shirts1.jpg",
      materials:
        "Shirt + Outwears mang thương hiệu BoinShop được xuất sứ từ chất liệu cao cấp, mang lại cho người sử dụng cảm giác thoải mái và dễ chịu khi hoạt động. Được thiết kế độc đáo mang phong cách street-wear",
      rating: "4.8",
      totalRating: "10",
      rating5: "2",
      rating4: "0",
      rating3: "2",
      rating2: "2",
      rating1: "4",
    },
    {
      id: 26,
      tags: "Shirts",
      name: "Vancarhell Jacket",
      fit: "Oversized",
      price: "530.000",
      image: "/boinshop/Shirts2.jpg",
      materials:
        "Shirt + Outwears mang thương hiệu BoinShop được xuất sứ từ chất liệu cao cấp, mang lại cho người sử dụng cảm giác thoải mái và dễ chịu khi hoạt động. Được thiết kế độc đáo mang phong cách street-wear",
      rating: "4.8",
      totalRating: "310",
      rating5: "50",
      rating4: "100",
      rating3: "80",
      rating2: "70",
      rating1: "10",
    },
    {
      id: 27,
      tags: "Shirts",
      name: "Jacket đen trơn hình chữ F",
      fit: "Oversized",
      price: "532.000",
      image: "/boinshop/Shirts3.jpg",
      materials:
        "Shirt + Outwears mang thương hiệu BoinShop được xuất sứ từ chất liệu cao cấp, mang lại cho người sử dụng cảm giác thoải mái và dễ chịu khi hoạt động. Được thiết kế độc đáo mang phong cách street-wear",
      rating: "4.8",
      totalRating: "400",
      rating5: "50",
      rating4: "100",
      rating3: "100",
      rating2: "100",
      rating1: "50",
    },
    {
      id: 28,
      tags: "Shirts",
      name: "Rabbit Hoodie Beige",
      fit: "Oversized",
      price: "450.000",
      image: "/boinshop/Shirts4.jpg",
      materials:
        "Shirt + Outwears mang thương hiệu BoinShop được xuất sứ từ chất liệu cao cấp, mang lại cho người sử dụng cảm giác thoải mái và dễ chịu khi hoạt động. Được thiết kế độc đáo mang phong cách street-wear",
      rating: "4.8",
      totalRating: "50",
      rating5: "10",
      rating4: "20",
      rating3: "10",
      rating2: "5",
      rating1: "5",
    },
    {
      id: 29,
      tags: "Shirts",
      name: "Rabbit Hoodie Black",
      fit: "Oversized",
      price: "470.000",
      image: "/boinshop/Shirts5.jpg",
      materials:
        "Shirt + Outwears mang thương hiệu BoinShop được xuất sứ từ chất liệu cao cấp, mang lại cho người sử dụng cảm giác thoải mái và dễ chịu khi hoạt động. Được thiết kế độc đáo mang phong cách street-wear",
      rating: "4.8",
      totalRating: "60",
      rating5: "20",
      rating4: "10",
      rating3: "12",
      rating2: "10",
      rating1: "10",
    },
    {
      id: 30,
      tags: "Shirts",
      name: "Hoodie trơn đen trắng",
      fit: "Oversized",
      price: "470.000",
      image: "/boinshop/Shirts6.jpg",
      materials:
        "Shirt + Outwears mang thương hiệu BoinShop được xuất sứ từ chất liệu cao cấp, mang lại cho người sử dụng cảm giác thoải mái và dễ chịu khi hoạt động. Được thiết kế độc đáo mang phong cách street-wear",
      rating: "4.8",
      totalRating: "150",
      rating5: "20",
      rating4: "50",
      rating3: "20",
      rating2: "40",
      rating1: "20",
    },
    {
      id: 31,
      tags: "Shirts",
      name: "Hoodie GetUp Early Xanh",
      fit: "Oversized",
      price: "350.000",
      image: "/boinshop/Shirts7.jpg",
      materials:
        "Shirt + Outwears mang thương hiệu BoinShop được xuất sứ từ chất liệu cao cấp, mang lại cho người sử dụng cảm giác thoải mái và dễ chịu khi hoạt động. Được thiết kế độc đáo mang phong cách street-wear",
      rating: "4.8",
      totalRating: "40",
      rating5: "10",
      rating4: "20",
      rating3: "0",
      rating2: "0",
      rating1: "10",
    },
    {
      id: 32,
      tags: "Shirts",
      name: "Hoodie trơn xanh lá",
      fit: "Oversized",
      price: "350.000",
      image: "/boinshop/Shirts8.jpg",
      materials:
        "Shirt + Outwears mang thương hiệu BoinShop được xuất sứ từ chất liệu cao cấp, mang lại cho người sử dụng cảm giác thoải mái và dễ chịu khi hoạt động. Được thiết kế độc đáo mang phong cách street-wear",
      rating: "4.8",
      totalRating: "220",
      rating5: "220",
      rating4: "0",
      rating3: "0",
      rating2: "0",
      rating1: "0",
    },
    {
      id: 33,
      tags: "Shirts",
      name: "Hoodie trà sữa màu đen",
      fit: "Oversized",
      price: "500.000",
      image: "/boinshop/Shirts9.jpg",
      materials:
        "Shirt + Outwears mang thương hiệu BoinShop được xuất sứ từ chất liệu cao cấp, mang lại cho người sử dụng cảm giác thoải mái và dễ chịu khi hoạt động. Được thiết kế độc đáo mang phong cách street-wear",
      rating: "4.8",
      totalRating: "440",
      rating5: "400",
      rating4: "10",
      rating3: "10",
      rating2: "10",
      rating1: "10",
    },
    {
      id: 34,
      tags: "Shirts",
      name: "Hoodie trà sữa màu hồng",
      fit: "Oversized",
      price: "500.000",
      image: "/boinshop/Shirts10.jpg",
      materials:
        "Shirt + Outwears mang thương hiệu BoinShop được xuất sứ từ chất liệu cao cấp, mang lại cho người sử dụng cảm giác thoải mái và dễ chịu khi hoạt động. Được thiết kế độc đáo mang phong cách street-wear",
      rating: "4.8",
      totalRating: "390",
      rating5: "370",
      rating4: "5",
      rating3: "5",
      rating2: "5",
      rating1: "5",
    },
    {
      id: 35,
      tags: "Shirts",
      name: "Hoodie trà sữa màu Beige",
      fit: "Oversized",
      price: "500.000",
      image: "/boinshop/Shirts11.jpg",
      materials:
        "Shirt + Outwears mang thương hiệu BoinShop được xuất sứ từ chất liệu cao cấp, mang lại cho người sử dụng cảm giác thoải mái và dễ chịu khi hoạt động. Được thiết kế độc đáo mang phong cách street-wear",
      rating: "4.8",
      totalRating: "420",
      rating5: "220",
      rating4: "20",
      rating3: "60",
      rating2: "50",
      rating1: "70",
    },
    {
      id: 36,
      tags: "Shirts",
      name: "Hoodie CREW mặt cười xanh dương",
      fit: "Oversized",
      price: "612.000",
      image: "/boinshop/Shirts12.jpg",
      materials:
        "Shirt + Outwears mang thương hiệu BoinShop được xuất sứ từ chất liệu cao cấp, mang lại cho người sử dụng cảm giác thoải mái và dễ chịu khi hoạt động. Được thiết kế độc đáo mang phong cách street-wear",
      rating: "4.8",
      totalRating: "420",
      rating5: "220",
      rating4: "20",
      rating3: "60",
      rating2: "50",
      rating1: "70",
    },

    // PANTS
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

  return NextResponse.json(allCollections);
};
