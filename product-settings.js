/**
 * ตั้งค่าการแสดงสินค้า
 *
 * วิธีใช้: นำ slug ของสินค้ามาใส่ใน products แล้วเปลี่ยน true / false
 * - visible: แสดงในการ์ดหน้ารวมสินค้า หน้าหมวดหมู่ และสินค้าแนะนำ
 * - showOnHome: อนุญาตให้แสดงเป็นสินค้าตัวอย่างบนหน้าแรก
 * - indexable: อนุญาตให้ Google เก็บหน้าสินค้าและใส่ใน sitemap.xml
 *
 * ตัวอย่างการปิดสินค้า:
 * 'surface-water-filter': { visible:false, showOnHome:false, indexable:false },
 */
module.exports = {
  defaults: {
    visible: true,
    showOnHome: true,
    indexable: true
  },
  products: {
    // เครื่องกรองน้ำประปา
    'water-treatment-plant-12q':          { visible:true, showOnHome:true, indexable:true }, // โรงกรองน้ำประปา 12Q
    'water-treatment-plant-24q':          { visible:true, showOnHome:true, indexable:true }, // โรงกรองน้ำประปา 24Q
    'surface-water-filter':               { visible:true, showOnHome:true, indexable:true }, // ถังกรองน้ำประปาผิวดิน
    'groundwater-filter':                 { visible:true, showOnHome:true, indexable:true }, // ถังกรองน้ำประปาบาดาล

    // เครื่องกรองน้ำ RO
    'ro-water-system-12q':                { visible:true, showOnHome:true, indexable:true }, // เครื่องกรองน้ำดื่ม RO 12Q
    'ro-water-system-24q':                { visible:true, showOnHome:true, indexable:true }, // เครื่องกรองน้ำดื่ม RO 24Q

    // ปั๊มน้ำโซล่าเซลล์
    'village-solar-water-system':         { visible:true, showOnHome:true, indexable:true }, // ระบบสูบน้ำโซล่าเซลล์ประปาหมู่บ้าน
    'on-grid-solar-system':               { visible:true, showOnHome:true, indexable:true }, // ระบบโซล่าเซลล์ออนกริด
    'mobile-solar-water-pump':            { visible:true, showOnHome:true, indexable:true }, // ปั๊มน้ำโซล่าเซลล์เคลื่อนที่
    'solar-pump-inverter':                { visible:true, showOnHome:true, indexable:true }, // อินเวอร์เตอร์ปั๊มน้ำโซล่าเซลล์

    // แอร์โซล่าเซลล์
    'solar-air-conditioner-system':       { visible:true, showOnHome:true, indexable:true }, // แอร์โซล่าเซลล์

    // ระบบตู้ควบคุมปั๊มน้ำ
    'automatic-pump-control-panel':       { visible:true, showOnHome:true, indexable:true }, // ตู้ควบคุมปั๊มน้ำอัตโนมัติ
    'backup-generator':                   { visible:true, showOnHome:true, indexable:true }, // เครื่องกำเนิดไฟฟ้าสำรอง
    'water-level-controller':             { visible:true, showOnHome:true, indexable:true }, // เครื่องควบคุมระดับน้ำ
    'water-flow-meter':                   { visible:true, showOnHome:true, indexable:true }, // Flow Meter
    'water-quality-meter':                { visible:true, showOnHome:true, indexable:true }, // เครื่องวัดคุณภาพน้ำ
    'automatic-chlorine-dispenser':       { visible:true, showOnHome:true, indexable:true }, // เครื่องจ่ายคลอรีนอัตโนมัติ

    // ปั๊มน้ำคุณภาพดี
    'submersible-pump':                   { visible:true, showOnHome:true, indexable:true }, // ปั๊มซับเมอร์ส
    'centrifugal-pump':                   { visible:true, showOnHome:true, indexable:true }, // ปั๊มหอยโข่ง
    'water-transfer-pump':                { visible:true, showOnHome:true, indexable:true }, // ปั๊มส่งน้ำ
    'village-water-system-renovation':    { visible:true, showOnHome:true, indexable:true }, // ชุดปรับปรุงระบบประปาหมู่บ้าน

    // ถังเก็บน้ำชุมชน
    'fiberglass-water-tank':              { visible:true, showOnHome:true, indexable:true }, // ถังเก็บน้ำไฟเบอร์กลาส
    'pvc-water-tank':                     { visible:true, showOnHome:true, indexable:true }, // ถังเก็บน้ำ PVC
    'stainless-steel-water-tank':         { visible:true, showOnHome:true, indexable:true }, // ถังเก็บน้ำสแตนเลส

    // สารกรองและบริการ
    'water-filter-media':                 { visible:true, showOnHome:true, indexable:true }  // สารกรองน้ำ
  }
};
