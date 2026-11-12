import type { Category, Discipline } from "./types";

export interface GroupsetSpec {
  brand: string;
  family: string;
  speeds: string;
  rd: string;
  fd: string;
  shifters: string;
  crank: string;
  cassette: string;
  chain: string;
  bb: string;
  brakes: string;
  rotors: string;
}

export const groupsets: Record<string, GroupsetSpec> = {
  "Shimano Dura-Ace Di2 R9270": { brand: "Shimano", family: "Dura-Ace Di2", speeds: "2×12", rd: "Dura-Ace RD-R9250 Di2", fd: "Dura-Ace FD-R9250 Di2", shifters: "Dura-Ace ST-R9270 液压碟刹", crank: "Dura-Ace FC-R9200 52/36T", cassette: "Dura-Ace CS-R9200 11-30T", chain: "Dura-Ace CN-M9100", bb: "Shimano BB-R9100 中空", brakes: "Dura-Ace BR-R9270 液压碟刹", rotors: "Dura-Ace RT-CL900 160/140mm" },
  "Shimano Ultegra Di2 R8170": { brand: "Shimano", family: "Ultegra Di2", speeds: "2×12", rd: "Ultegra RD-R8150 Di2", fd: "Ultegra FD-R8150 Di2", shifters: "Ultegra ST-R8170 液压碟刹", crank: "Ultegra FC-R8100 52/36T", cassette: "Ultegra CS-R8100 11-30T", chain: "Ultegra CN-M8100", bb: "Shimano BB-R9100 中空", brakes: "Ultegra BR-R8170 液压碟刹", rotors: "Ultegra RT-CL800 160/140mm" },
  "Shimano 105 Di2 R7170": { brand: "Shimano", family: "105 Di2", speeds: "2×12", rd: "105 RD-R7150 Di2", fd: "105 FD-R7150 Di2", shifters: "105 ST-R7170 液压碟刹", crank: "105 FC-R7100 50/34T", cassette: "105 CS-R7100 11-34T", chain: "Shimano CN-M7100", bb: "Shimano BB-RS500", brakes: "105 BR-R7170 液压碟刹", rotors: "Shimano RT-CL800 160/140mm" },
  "Shimano 105 R7100": { brand: "Shimano", family: "105 机械", speeds: "2×12", rd: "105 RD-R7100 机械", fd: "105 FD-R7100 机械", shifters: "105 ST-R7120 机械/液压", crank: "105 FC-R7100 50/34T", cassette: "105 CS-R7100 11-34T", chain: "Shimano CN-M7100", bb: "Shimano BB-RS500", brakes: "105 BR-R7170 液压碟刹", rotors: "Shimano RT-70 160/140mm" },
  "Shimano 105 R7000": { brand: "Shimano", family: "105 机械", speeds: "2×11", rd: "105 RD-R7000 机械", fd: "105 FD-R7000 机械", shifters: "105 ST-R7020 机械/液压", crank: "105 FC-R7000 50/34T", cassette: "105 CS-R7000 11-30T", chain: "Shimano CN-HG601", bb: "Shimano BB-RS500", brakes: "105 BR-R7070 液压碟刹", rotors: "Shimano RT-70 160/140mm" },
  "Shimano Ultegra R8100": { brand: "Shimano", family: "Ultegra 机械", speeds: "2×12", rd: "Ultegra RD-R8100 机械", fd: "Ultegra FD-R8100 机械", shifters: "Ultegra ST-R8120 机械/液压", crank: "Ultegra FC-R8100 52/36T", cassette: "Ultegra CS-R8100 11-30T", chain: "Ultegra CN-M8100", bb: "Shimano BB-R9100 中空", brakes: "Ultegra BR-R8170 液压碟刹", rotors: "Ultegra RT-CL800 160/140mm" },
  "SRAM RED AXS": { brand: "SRAM", family: "RED AXS", speeds: "2×12", rd: "SRAM RED AXS 后拨", fd: "SRAM RED AXS 前拨", shifters: "SRAM RED AXS 液压碟刹", crank: "SRAM RED AXS 48/35T 功率计", cassette: "SRAM RED XG-1290 10-30T", chain: "SRAM RED Flattop", bb: "SRAM DUB BSA", brakes: "SRAM RED 液压碟刹", rotors: "SRAM CenterLine XR 160/140mm" },
  "SRAM Force AXS": { brand: "SRAM", family: "Force AXS", speeds: "2×12", rd: "SRAM Force AXS 后拨", fd: "SRAM Force AXS 前拨", shifters: "SRAM Force AXS 液压碟刹", crank: "SRAM Force AXS 48/35T", cassette: "SRAM Force XG-1270 10-30T", chain: "SRAM Force Flattop", bb: "SRAM DUB BSA", brakes: "SRAM Force 液压碟刹", rotors: "SRAM CenterLine 160/140mm" },
  "SRAM Rival AXS": { brand: "SRAM", family: "Rival AXS", speeds: "2×12", rd: "SRAM Rival AXS 后拨", fd: "SRAM Rival AXS 前拨", shifters: "SRAM Rival AXS 液压碟刹", crank: "SRAM Rival AXS 48/35T", cassette: "SRAM Rival XG-1250 10-36T", chain: "SRAM Rival Flattop", bb: "SRAM DUB BSA", brakes: "SRAM Rival 液压碟刹", rotors: "SRAM Paceline 160/140mm" },
  "SRAM Force XPLR AXS": { brand: "SRAM", family: "Force XPLR AXS", speeds: "1×12", rd: "SRAM Force XPLR AXS 后拨", fd: "—", shifters: "SRAM Force AXS 液压碟刹", crank: "SRAM Force 1 AXS 40T", cassette: "SRAM XPLR XG-1271 10-44T", chain: "SRAM Force Flattop", bb: "SRAM DUB BSA", brakes: "SRAM Force 液压碟刹", rotors: "SRAM CenterLine 160/160mm" },
  "SRAM XPLR X0 AXS": { brand: "SRAM", family: "X0 XPLR AXS", speeds: "1×12", rd: "SRAM X0 XPLR AXS 后拨", fd: "—", shifters: "SRAM X0 AXS 液压碟刹", crank: "SRAM X0 1 AXS 40T", cassette: "SRAM XPLR XG-1271 10-44T", chain: "SRAM X0 Flattop", bb: "SRAM DUB BSA", brakes: "SRAM Level Silver 4活塞", rotors: "SRAM CenterLine 160/160mm" },
  "Campagnolo Super Record Wireless": { brand: "Campagnolo", family: "Super Record Wireless", speeds: "2×12", rd: "Super Record Wireless 后拨", fd: "Super Record Wireless 前拨", shifters: "Super Record Wireless 液压碟刹", crank: "Super Record 48/32T 碳纤维", cassette: "Super Record 10-29T", chain: "Campagnolo C-Link", bb: "Campagnolo Pro-Tech", brakes: "Super Record 液压碟刹", rotors: "Campagnolo 160/140mm" },
  "Campagnolo Record 12": { brand: "Campagnolo", family: "Record 12", speeds: "2×12", rd: "Record 12 机械后拨", fd: "Record 12 机械前拨", shifters: "Record 12 机械/液压", crank: "Record 48/32T 碳纤维", cassette: "Record 11-32T", chain: "Campagnolo Record", bb: "Campagnolo Pro-Tech", brakes: "Record 液压碟刹", rotors: "Campagnolo 160/140mm" },
  "Shimano GRX RX822": { brand: "Shimano", family: "GRX Di2", speeds: "1×12", rd: "GRX RD-RX822 Di2", fd: "—", shifters: "GRX ST-RX825 Di2 液压碟刹", crank: "GRX FC-RX820 40T", cassette: "XT CS-M8100 10-45T", chain: "Shimano CN-M8100", bb: "Shimano BB-RS500", brakes: "GRX BR-RX820 液压碟刹", rotors: "Shimano RT-CL800 160/160mm" },
  "Shimano GRX RX820": { brand: "Shimano", family: "GRX 机械", speeds: "1×12", rd: "GRX RD-RX820 机械", fd: "—", shifters: "GRX ST-RX610 机械/液压", crank: "GRX FC-RX610 40T", cassette: "Shimano SLX CS-M7100 10-45T", chain: "Shimano CN-M7100", bb: "Shimano BB-RS500", brakes: "GRX BR-RX400 液压碟刹", rotors: "Shimano RT-70 160/160mm" },
  "Shimano Tiagra 4720": { brand: "Shimano", family: "Tiagra", speeds: "2×10", rd: "Tiagra RD-4700 机械", fd: "Tiagra FD-4700 机械", shifters: "Tiagra ST-4720 机械/液压", crank: "Tiagra FC-4700 50/34T", cassette: "Tiagra CS-HG500 11-34T", chain: "Shimano CN-HG54", bb: "Shimano BB-RS500", brakes: "Tiagra BR-4770 液压碟刹", rotors: "Shimano RT-54 160/140mm" },
  "SRAM XX SL Eagle AXS": { brand: "SRAM", family: "XX SL Eagle AXS", speeds: "1×12", rd: "SRAM XX SL Eagle AXS 后拨", fd: "—", shifters: "SRAM XX SL Eagle AXS 指拨", crank: "SRAM XX SL 34T 碳纤维功率计", cassette: "SRAM XX SL Eagle 10-52T", chain: "SRAM XX SL Flattop", bb: "SRAM DUB BSA", brakes: "SRAM Level Ultimate 4活塞", rotors: "SRAM HS2 180/160mm" },
  "SRAM X0 Eagle AXS": { brand: "SRAM", family: "X0 Eagle AXS", speeds: "1×12", rd: "SRAM X0 Eagle AXS 后拨", fd: "—", shifters: "SRAM X0 Eagle AXS 指拨", crank: "SRAM X0 Eagle 34T", cassette: "SRAM X0 Eagle 10-52T", chain: "SRAM X0 Flattop", bb: "SRAM DUB BSA", brakes: "SRAM Code Bronze 4活塞", rotors: "SRAM HS2 180/160mm" },
  "SRAM X0 Eagle": { brand: "SRAM", family: "X0 Eagle", speeds: "1×12", rd: "SRAM X0 Eagle 机械后拨", fd: "—", shifters: "SRAM X0 Eagle 指拨", crank: "SRAM X0 Eagle 34T", cassette: "SRAM X0 Eagle 10-52T", chain: "SRAM X0 Eagle", bb: "SRAM DUB BSA", brakes: "SRAM Code R 4活塞", rotors: "SRAM CenterLine 180/160mm" },
  "SRAM X0 DH": { brand: "SRAM", family: "X0 DH", speeds: "1×7", rd: "SRAM X0 DH 7 速后拨", fd: "—", shifters: "SRAM X0 DH 7 速指拨", crank: "SRAM X0 DH 34T", cassette: "SRAM X0 DH 10-24T", chain: "SRAM PC-1110", bb: "SRAM DUB BSA", brakes: "SRAM Code RSC 4活塞", rotors: "SRAM HS2 200/180mm" },
  "SRAM GX Eagle AXS": { brand: "SRAM", family: "GX Eagle AXS", speeds: "1×12", rd: "SRAM GX Eagle AXS 后拨", fd: "—", shifters: "SRAM GX Eagle AXS 指拨", crank: "SRAM GX Eagle 32T", cassette: "SRAM GX Eagle 10-52T", chain: "SRAM GX Flattop", bb: "SRAM DUB BSA", brakes: "SRAM DB8 4活塞", rotors: "SRAM HS2 180/160mm" },
  "SRAM GX Eagle": { brand: "SRAM", family: "GX Eagle", speeds: "1×12", rd: "SRAM GX Eagle 机械后拨", fd: "—", shifters: "SRAM GX Eagle 指拨", crank: "SRAM GX Eagle 32T", cassette: "SRAM GX Eagle 10-52T", chain: "SRAM GX Eagle", bb: "SRAM DUB BSA", brakes: "SRAM G2 R 4活塞", rotors: "SRAM CenterLine 180/160mm" },
  "SRAM NX Eagle": { brand: "SRAM", family: "NX Eagle", speeds: "1×12", rd: "SRAM NX Eagle 机械后拨", fd: "—", shifters: "SRAM NX Eagle 指拨", crank: "SRAM NX Eagle 32T", cassette: "SRAM NX Eagle 11-50T", chain: "SRAM NX Eagle", bb: "SRAM DUB BSA", brakes: "SRAM Level T 4活塞", rotors: "SRAM CenterLine 180/160mm" },
  "SRAM SX Eagle": { brand: "SRAM", family: "SX Eagle", speeds: "1×12", rd: "SRAM SX Eagle 机械后拨", fd: "—", shifters: "SRAM SX Eagle 指拨", crank: "SRAM SX Eagle 32T", cassette: "SRAM SX Eagle 11-50T", chain: "SRAM SX Eagle", bb: "SRAM Powerspline", brakes: "SRAM Level 4活塞", rotors: "SRAM CenterLine 180/160mm" },
  "Shimano XTR M9100": { brand: "Shimano", family: "XTR", speeds: "1×12", rd: "XTR RD-M9100 机械", fd: "—", shifters: "XTR SL-M9100 指拨", crank: "XTR FC-M9120 34T", cassette: "XTR CS-M9100 10-51T", chain: "Shimano CN-M9100", bb: "Shimano BB-MT800", brakes: "XTR BR-M9120 4活塞", rotors: "Shimano RT-MT900 180/160mm" },
  "Shimano XT M8100": { brand: "Shimano", family: "XT", speeds: "1×12", rd: "XT RD-M8100 机械", fd: "—", shifters: "XT SL-M8100 指拨", crank: "XT FC-M8120 34T", cassette: "XT CS-M8100 10-51T", chain: "Shimano CN-M8100", bb: "Shimano BB-MT800", brakes: "XT BR-M8120 4活塞", rotors: "Shimano RT-MT800 180/160mm" },
  "Shimano SLX M7100": { brand: "Shimano", family: "SLX", speeds: "1×12", rd: "SLX RD-M7100 机械", fd: "—", shifters: "SLX SL-M7100 指拨", crank: "SLX FC-M7120 32T", cassette: "SLX CS-M7100 10-51T", chain: "Shimano CN-M7100", bb: "Shimano BB-MT800", brakes: "SLX BR-M7120 4活塞", rotors: "Shimano RT-MT800 180/160mm" },
  "Shimano Deore M6100": { brand: "Shimano", family: "Deore", speeds: "1×12", rd: "Deore RD-M6100 机械", fd: "—", shifters: "Deore SL-M6100 指拨", crank: "Deore FC-M6120 32T", cassette: "Deore CS-M6100 10-51T", chain: "Shimano CN-M6100", bb: "Shimano BB-MT500", brakes: "Deore BR-M6120 4活塞", rotors: "Shimano RT-66 180/160mm" },
  "Shimano CUES U6000": { brand: "Shimano", family: "CUES", speeds: "1×10", rd: "CUES RD-U6000 机械", fd: "—", shifters: "CUES SL-U6000 指拨", crank: "CUES FC-U6000 32T", cassette: "CUES CS-U6000 11-48T", chain: "Shimano CN-LG500", bb: "Shimano BB-MT500", brakes: "Shimano MT200 液压碟刹", rotors: "Shimano RT-26 180/160mm" },
  "L-TWOO RX 2x12": { brand: "L-TWOO", family: "RX", speeds: "2×12", rd: "L-TWOO RX 12 速后拨", fd: "L-TWOO RX 前拨", shifters: "L-TWOO RX 液压碟刹手变", crank: "Branta 铝合金一体齿盘 48T", cassette: "L-TWOO 11-34T", chain: "L-TWOO 12 速链条", bb: "BSA 螺纹中轴", brakes: "L-TWOO 液压碟刹", rotors: "160mm 六钉碟片" },
  "L-TWOO eGR 1x12": { brand: "L-TWOO", family: "eGR", speeds: "1×12", rd: "L-TWOO eGR 12 速后拨", fd: "—", shifters: "L-TWOO eGR 液压碟刹手变", crank: "L-TWOO eGR 40T", cassette: "L-TWOO 11-50T", chain: "L-TWOO 12 速链条", bb: "BSA 螺纹中轴", brakes: "L-TWOO 液压碟刹", rotors: "160mm 六钉碟片" },
  "Shimano Tourney 2×7": { brand: "Shimano", family: "Tourney", speeds: "2×7", rd: "Tourney RD-A070", fd: "Tourney FD-A070", shifters: "Tourney ST-A073 机械", crank: "Tourney FC-A070 50/34T", cassette: "Shimano CS-HG200 12-28T", chain: "Shimano CN-HG40", bb: "Shimano BB-UN101 方孔", brakes: "机械碟刹", rotors: "160mm 六钉" },
  "Shimano Tourney TX 3×7": { brand: "Shimano", family: "Tourney TX", speeds: "3×7", rd: "Tourney RD-TX800", fd: "Tourney FD-TX800", shifters: "Tourney ST-EF500 指拨", crank: "Tourney FC-TY501 24/34/42T", cassette: "Shimano CS-HG200 12-32T", chain: "Shimano CN-HG40", bb: "Shimano BB-UN101 方孔", brakes: "机械碟刹", rotors: "160mm 六钉" },
  "Shimano Claris R2000": { brand: "Shimano", family: "Claris", speeds: "2×8", rd: "Claris RD-R2000", fd: "Claris FD-R2000", shifters: "Claris ST-R2000 机械", crank: "Claris FC-R2000 50/34T", cassette: "Shimano CS-HG50 11-32T", chain: "Shimano CN-HG71", bb: "Shimano BB-RS500", brakes: "机械碟刹", rotors: "160mm 六钉" },
  "Shimano Sora R3000": { brand: "Shimano", family: "Sora", speeds: "2×9", rd: "Sora RD-R3000", fd: "Sora FD-R3000", shifters: "Sora ST-R3000 机械", crank: "Sora FC-R3000 50/34T", cassette: "Shimano CS-HG400 11-34T", chain: "Shimano CN-HG53", bb: "Shimano BB-RS500", brakes: "Sora 机械碟刹", rotors: "160mm 六钉" },
  "Shimano Altus M2000": { brand: "Shimano", family: "Altus", speeds: "3×9", rd: "Altus RD-M2000", fd: "Altus FD-M2000", shifters: "Altus SL-M2010 指拨", crank: "Altus FC-MT210 22/30/40T", cassette: "Shimano CS-HG200 11-36T", chain: "Shimano CN-HG53", bb: "Shimano BB-MT500", brakes: "Shimano MT200 液压碟刹", rotors: "Shimano RT-26 160mm" },
  "Shimano Acera M3000": { brand: "Shimano", family: "Acera", speeds: "3×9", rd: "Acera RD-M3000", fd: "Acera FD-M3000", shifters: "Acera SL-M3000 指拨", crank: "Acera FC-MT300 22/30/40T", cassette: "Shimano CS-HG400 11-36T", chain: "Shimano CN-HG53", bb: "Shimano BB-MT500", brakes: "Shimano MT200 液压碟刹", rotors: "Shimano RT-26 160mm" },
  "Shimano GRX RX400": { brand: "Shimano", family: "GRX", speeds: "2×10", rd: "GRX RD-RX400", fd: "GRX FD-RX400", shifters: "GRX ST-RX400 液压碟刹", crank: "GRX FC-RX600 46/30T", cassette: "Shimano CS-HG50 11-36T", chain: "Shimano CN-HG54", bb: "Shimano BB-RS500", brakes: "GRX BR-RX400 液压碟刹", rotors: "Shimano RT-70 160mm" },
  "microSHIFT 2×8": { brand: "microSHIFT", family: "M26", speeds: "2×8", rd: "microSHIFT RD-M26S", fd: "microSHIFT FD-M20", shifters: "microSHIFT SB-M08 手变", crank: "Prowheel 50/34T", cassette: "microSHIFT CS-H081 11-32T", chain: "KMC X8", bb: "BSA 方孔中轴", brakes: "机械碟刹", rotors: "160mm 六钉" },
  "microSHIFT 1×8": { brand: "microSHIFT", family: "M36", speeds: "1×8", rd: "microSHIFT RD-M36S", fd: "—", shifters: "microSHIFT SL-M718 指拨", crank: "Prowheel 32T", cassette: "microSHIFT CS-H081 11-34T", chain: "KMC X8", bb: "BSA 方孔中轴", brakes: "机械碟刹", rotors: "160mm 六钉" },
  "L-TWOO A5 2×9": { brand: "L-TWOO", family: "A5", speeds: "2×9", rd: "L-TWOO A5 9 速后拨", fd: "L-TWOO A5 前拨", shifters: "L-TWOO A5 手变", crank: "L-TWOO 50/34T", cassette: "L-TWOO 11-32T", chain: "L-TWOO 9 速链条", bb: "BSA 螺纹中轴", brakes: "L-TWOO 机械碟刹", rotors: "160mm 六钉" },
  "L-TWOO A7 2×10": { brand: "L-TWOO", family: "A7", speeds: "2×10", rd: "L-TWOO A7 10 速后拨", fd: "L-TWOO A7 前拨", shifters: "L-TWOO A7 手变", crank: "L-TWOO 50/34T", cassette: "L-TWOO 11-34T", chain: "L-TWOO 10 速链条", bb: "BSA 螺纹中轴", brakes: "L-TWOO 机械碟刹", rotors: "160mm 六钉" },
  "L-TWOO AX 1×12": { brand: "L-TWOO", family: "AX", speeds: "1×12", rd: "L-TWOO AX 12 速后拨", fd: "—", shifters: "L-TWOO AX 指拨", crank: "L-TWOO 32T", cassette: "L-TWOO 11-50T", chain: "L-TWOO 12 速链条", bb: "BSA 螺纹中轴", brakes: "L-TWOO 液压碟刹", rotors: "160mm 六钉" },
};

export interface WheelsetSpec {
  brand: string;
  rim: string;
  hubs: string;
  tubeless: string;
}

export const wheelsets: Record<string, WheelsetSpec> = {
  "Roval Rapide CLX III": { brand: "Roval", rim: "Rapide CLX III 碳纤维 51/60mm", hubs: "DT Swiss 180 陶瓷轴承", tubeless: "真空胎系统" },
  "Roval Alpinist CLX III": { brand: "Roval", rim: "Alpinist CLX III 碳纤维 35mm", hubs: "DT Swiss 180 陶瓷轴承", tubeless: "真空胎系统" },
  "Roval Rapide CL II": { brand: "Roval", rim: "Rapide CL II 碳纤维 51mm", hubs: "DT Swiss 350", tubeless: "真空胎系统" },
  "Roval C38": { brand: "Roval", rim: "C38 碳纤维 38mm", hubs: "DT Swiss 370", tubeless: "真空胎系统" },
  "Roval Control SL": { brand: "Roval", rim: "Control SL 碳纤维 29mm 内宽", hubs: "DT Swiss 180", tubeless: "真空胎系统" },
  "Roval Traverse SL": { brand: "Roval", rim: "Traverse SL 碳纤维 30mm 内宽", hubs: "DT Swiss 350", tubeless: "真空胎系统" },
  "Bontrager Aeolus RSL 51": { brand: "Bontrager", rim: "Aeolus RSL 51 碳纤维 51mm", hubs: "DT Swiss 240", tubeless: "TLR 真空胎" },
  "Bontrager Aeolus Pro 51": { brand: "Bontrager", rim: "Aeolus Pro 51 碳纤维 51mm", hubs: "Bontrager 自研", tubeless: "TLR 真空胎" },
  "Bontrager Paradigm Comp": { brand: "Bontrager", rim: "Paradigm Comp 铝合金 25mm", hubs: "Bontrager 自研", tubeless: "TLR 真空胎" },
  "Bontrager Line Pro 30": { brand: "Bontrager", rim: "Line Pro 30 碳纤维 30mm 内宽", hubs: "Bontrager Rapid Drive", tubeless: "TLR 真空胎" },
  "Bontrager Kovee Pro 30": { brand: "Bontrager", rim: "Kovee Pro 30 碳纤维 30mm 内宽", hubs: "Bontrager Rapid Drive", tubeless: "TLR 真空胎" },
  "Giant SLR 0 40": { brand: "Giant", rim: "SLR 0 碳纤维 40mm", hubs: "Giant 自研 陶瓷", tubeless: "真空胎系统" },
  "Giant SLR 1 40": { brand: "Giant", rim: "SLR 1 碳纤维 40mm", hubs: "Giant 自研", tubeless: "真空胎系统" },
  "Giant SLR 2 42": { brand: "Giant", rim: "SLR 2 碳纤维 42mm", hubs: "Giant 自研", tubeless: "真空胎系统" },
  "Giant P-R2": { brand: "Giant", rim: "P-R2 铝合金 25mm", hubs: "Giant 自研", tubeless: "支持真空胎" },
  "Giant XCR 0": { brand: "Giant", rim: "XCR 0 碳纤维 26mm 内宽", hubs: "Giant 自研", tubeless: "真空胎系统" },
  "Giant TRX 0": { brand: "Giant", rim: "TRX 0 碳纤维 30mm 内宽", hubs: "Giant 自研", tubeless: "真空胎系统" },
  "DT Swiss ARC 1100 Dicut": { brand: "DT Swiss", rim: "ARC 1100 Dicut 碳纤维 50mm", hubs: "DT Swiss 180", tubeless: "真空胎系统" },
  "DT Swiss ERC 1400": { brand: "DT Swiss", rim: "ERC 1400 碳纤维 35mm", hubs: "DT Swiss 240", tubeless: "真空胎系统" },
  "DT Swiss PR 1600": { brand: "DT Swiss", rim: "PR 1600 铝合金 23mm", hubs: "DT Swiss 370", tubeless: "真空胎系统" },
  "DT Swiss XRC 1200": { brand: "DT Swiss", rim: "XRC 1200 碳纤维 30mm 内宽", hubs: "DT Swiss 180", tubeless: "真空胎系统" },
  "DT Swiss XM 1700": { brand: "DT Swiss", rim: "XM 1700 铝合金 30mm 内宽", hubs: "DT Swiss 350", tubeless: "真空胎系统" },
  "Shimano Dura-Ace C50": { brand: "Shimano", rim: "Dura-Ace C50 碳纤维 50mm", hubs: "Shimano Dura-Ace", tubeless: "真空胎系统" },
  "Shimano Ultegra C36": { brand: "Shimano", rim: "Ultegra C36 碳纤维 36mm", hubs: "Shimano Ultegra", tubeless: "真空胎系统" },
  "Fulcrum Speed 42": { brand: "Fulcrum", rim: "Speed 42 碳纤维 42mm", hubs: "Fulcrum 自研", tubeless: "真空胎系统" },
  "Campagnolo Bora Ultra WTO 45": { brand: "Campagnolo", rim: "Bora Ultra WTO 45 碳纤维 45mm", hubs: "Campagnolo USB 陶瓷", tubeless: "真空胎系统" },
  "Vision Metron 45 SL": { brand: "Vision", rim: "Metron 45 SL 碳纤维 45mm", hubs: "Vision 自研", tubeless: "真空胎系统" },
  "ENVE SES 4.5": { brand: "ENVE", rim: "SES 4.5 碳纤维 49/56mm", hubs: "ENVE 自研", tubeless: "真空胎系统" },
  "Zipp 404 Firecrest": { brand: "Zipp", rim: "404 Firecrest 碳纤维 58mm", hubs: "Zipp 自研", tubeless: "真空胎系统" },
  "Mavic Cosmic SL 45": { brand: "Mavic", rim: "Cosmic SL 45 碳纤维 45mm", hubs: "Mavic 自研", tubeless: "UST 真空胎" },
  "Hunt 44 Aerodynamicist": { brand: "Hunt", rim: "44 Aerodynamicist 碳纤维 44mm", hubs: "Hunt 自研", tubeless: "真空胎系统" },
  "Princeton CarbonWorks Wake 6560": { brand: "Princeton", rim: "Wake 6560 碳纤维 65mm", hubs: "DT Swiss 180", tubeless: "真空胎系统" },
  "Cadex 50 Ultra": { brand: "Cadex", rim: "50 Ultra 碳纤维 50mm", hubs: "Cadex 自研", tubeless: "真空胎系统" },
  "Syncros Capital 1.0 50": { brand: "Syncros", rim: "Capital 1.0 50 碳纤维 50mm", hubs: "DT Swiss 240", tubeless: "真空胎系统" },
  "Syncros Silverton 1.0": { brand: "Syncros", rim: "Silverton 1.0 碳纤维 30mm 内宽", hubs: "DT Swiss 240", tubeless: "真空胎系统" },
  "Merida Team SL 45": { brand: "Merida", rim: "Team SL 45 碳纤维 45mm", hubs: "Merida 自研", tubeless: "真空胎系统" },
  "Merida Team TR": { brand: "Merida", rim: "Team TR 碳纤维 30mm 内宽", hubs: "Merida 自研", tubeless: "真空胎系统" },
  "BMC CRD 501": { brand: "BMC", rim: "CRD 501 碳纤维 50mm", hubs: "DT Swiss 350", tubeless: "真空胎系统" },
  "BMC CRD 30": { brand: "BMC", rim: "CRD 30 碳纤维 30mm 内宽", hubs: "DT Swiss 350", tubeless: "真空胎系统" },
  "Orbea Oquo Road Control": { brand: "Orbea", rim: "Oquo Road Control 碳纤维 45mm", hubs: "Oquo 自研", tubeless: "真空胎系统" },
  "Orbea Oquo MP30": { brand: "Orbea", rim: "Oquo MP30 碳纤维 30mm 内宽", hubs: "Oquo 自研", tubeless: "真空胎系统" },
  "Wilier HY 45": { brand: "Wilier", rim: "HY 45 碳纤维 45mm", hubs: "Wilier 自研", tubeless: "真空胎系统" },
  "Factor Black Inc 48": { brand: "Black Inc", rim: "Black Inc 48 碳纤维 48mm", hubs: "Black Inc 自研", tubeless: "真空胎系统" },
  "Lapierre DT Swiss ER 1600": { brand: "DT Swiss", rim: "ER 1600 铝合金 25mm", hubs: "DT Swiss 370", tubeless: "真空胎系统" },
  "Ridley Forza 45": { brand: "Forza", rim: "Forza 45 碳纤维 45mm", hubs: "Ridley 自研", tubeless: "真空胎系统" },
  "Cube Newmen Advanced": { brand: "Newmen", rim: "Newmen Advanced 碳纤维 50mm", hubs: "Newmen 自研", tubeless: "真空胎系统" },
  "Cube Newmen Evolution": { brand: "Newmen", rim: "Newmen Evolution 铝合金 30mm 内宽", hubs: "Newmen 自研", tubeless: "真空胎系统" },
  "Cannondale HollowGram 45": { brand: "HollowGram", rim: "HollowGram 45 碳纤维 45mm", hubs: "HollowGram 自研", tubeless: "真空胎系统" },
  "Cannondale HollowGram XC": { brand: "HollowGram", rim: "HollowGram XC 碳纤维 26mm 内宽", hubs: "HollowGram 自研", tubeless: "真空胎系统" },
  "Look Corima 47": { brand: "Corima", rim: "Corima 47 碳纤维 47mm", hubs: "Corima 自研", tubeless: "真空胎系统" },
  "Felt Devox 45": { brand: "Devox", rim: "Devox 45 碳纤维 45mm", hubs: "Devox 自研", tubeless: "真空胎系统" },
  "Most Ultra 50": { brand: "Most", rim: "Most Ultra 50 碳纤维 50mm", hubs: "Most 自研", tubeless: "真空胎系统" },
  "Enve SES 4.5": { brand: "ENVE", rim: "SES 4.5 碳纤维 49/56mm", hubs: "ENVE 自研", tubeless: "真空胎系统" },
  "Reserve 52/63": { brand: "Reserve", rim: "Reserve 52/63 碳纤维", hubs: "DT Swiss 350", tubeless: "真空胎系统" },
  "Reserve 30": { brand: "Reserve", rim: "Reserve 30 碳纤维 30mm 内宽", hubs: "DT Swiss 350", tubeless: "真空胎系统" },
  "Santa Cruz Reserve 30": { brand: "Reserve", rim: "Reserve 30 碳纤维 30mm 内宽", hubs: "DT Swiss 350", tubeless: "真空胎系统" },
  "Race Face ARC 30": { brand: "Race Face", rim: "ARC 30 铝合金 30mm 内宽", hubs: "Race Face 自研", tubeless: "真空胎系统" },
  "Spank 359": { brand: "Spank", rim: "Spank 359 铝合金 30mm 内宽", hubs: "Spank 自研", tubeless: "真空胎系统" },
  "Crankbrothers Synthesis": { brand: "Crankbrothers", rim: "Synthesis 碳纤维 31mm 内宽", hubs: "Crankbrothers 自研", tubeless: "真空胎系统" },
  "WTB KOM": { brand: "WTB", rim: "KOM 铝合金 29mm 内宽", hubs: "Shimano 自研", tubeless: "真空胎系统" },
  "DT Swiss M1900": { brand: "DT Swiss", rim: "M1900 铝合金 30mm 内宽", hubs: "DT Swiss 370", tubeless: "真空胎系统" },
  "Newmen Evolution": { brand: "Newmen", rim: "Evolution 铝合金 30mm 内宽", hubs: "Newmen 自研", tubeless: "真空胎系统" },
  "Race Face AR": { brand: "Race Face", rim: "AR 铝合金 30mm 内宽", hubs: "Race Face 自研", tubeless: "真空胎系统" },
  "DT Swiss XR 1700": { brand: "DT Swiss", rim: "XR 1700 铝合金 25mm 内宽", hubs: "DT Swiss 350", tubeless: "真空胎系统" },
  "Vision Metron 60 SL": { brand: "Vision", rim: "Metron 60 SL 碳纤维 60mm", hubs: "Vision 自研", tubeless: "真空胎系统" },
  "BRANTA C50 TEAM": { brand: "Branta", rim: "C50 TEAM 碳纤维 50mm", hubs: "Branta 自研", tubeless: "真空胎系统" },
  "Branta 铝合金碟刹轮组": { brand: "Branta", rim: "铝合金碟刹轮圈", hubs: "Branta 培林花鼓", tubeless: "支持真空胎" },
  "PARDUS 碳纤维轮组": { brand: "PARDUS", rim: "碳纤维碟刹轮圈", hubs: "PARDUS 自研", tubeless: "真空胎系统" },
  "PARDUS 铝合金轮组": { brand: "PARDUS", rim: "铝合金碟刹轮圈", hubs: "PARDUS 自研", tubeless: "支持真空胎" },
  "SAVA 碳纤维轮组": { brand: "SAVA", rim: "碳纤维碟刹轮圈", hubs: "SAVA 自研", tubeless: "真空胎系统" },
  "SAVA 50mm 碳纤维轮组": { brand: "SAVA", rim: "碳纤维 50mm", hubs: "SAVA 自研", tubeless: "真空胎系统" },
  "SAVA 铝合金轮组": { brand: "SAVA", rim: "铝合金碟刹轮圈", hubs: "SAVA 自研", tubeless: "支持真空胎" },
  "SAVA 铝合金砾石轮组": { brand: "SAVA", rim: "铝合金砾石轮圈", hubs: "SAVA 自研", tubeless: "支持真空胎" },
  "WINSPACE HYPER 碳纤维轮组": { brand: "WINSPACE", rim: "HYPER 碳纤维轮圈", hubs: "WINSPACE 自研", tubeless: "真空胎系统" },
  "UNAAS Hard D50 碳纤维轮组": { brand: "UNAAS", rim: "Hard D50 碳纤维 50mm", hubs: "UNAAS 自研", tubeless: "真空胎系统" },
  "Axis Sport Disc": { brand: "Specialized", rim: "Axis Sport 铝合金碟刹轮圈", hubs: "Axis 自研", tubeless: "支持真空胎" },
  "Axis Elite Disc": { brand: "Specialized", rim: "Axis Elite 铝合金碟刹轮圈", hubs: "Axis 自研", tubeless: "真空胎系统" },
  "DT Swiss G540": { brand: "DT Swiss", rim: "G540 铝合金砾石轮圈", hubs: "DT Swiss 370", tubeless: "真空胎系统" },
  "Bontrager Paradigm SL": { brand: "Bontrager", rim: "Paradigm SL 铝合金碟刹轮圈", hubs: "Bontrager 自研", tubeless: "TLR 真空胎" },
  "Giant S-X2 Disc": { brand: "Giant", rim: "S-X2 铝合金碟刹轮圈", hubs: "Giant 自研", tubeless: "支持真空胎" },
  "Giant P-R2 Disc": { brand: "Giant", rim: "P-R2 铝合金碟刹轮圈", hubs: "Giant 自研", tubeless: "支持真空胎" },
  "Merida Comp SL": { brand: "Merida", rim: "Comp SL 铝合金轮圈", hubs: "Merida 自研", tubeless: "支持真空胎" },
  "Merida Comp CC": { brand: "Merida", rim: "Comp CC 铝合金轮圈", hubs: "Merida 自研", tubeless: "支持真空胎" },
  "Cannondale RD 2.0": { brand: "Cannondale", rim: "RD 2.0 铝合金轮圈", hubs: "Cannondale 自研", tubeless: "支持真空胎" },
  "Cannondale CX 2.0": { brand: "Cannondale", rim: "CX 2.0 铝合金砾石轮圈", hubs: "Cannondale 自研", tubeless: "支持真空胎" },
  "Syncros Race 24": { brand: "Syncros", rim: "Race 24 铝合金轮圈", hubs: "Syncros 自研", tubeless: "支持真空胎" },
  "Cube Alexrims": { brand: "Cube", rim: "Alexrims 铝合金轮圈", hubs: "Cube 自研", tubeless: "支持真空胎" },
  "Bianchi Reparto Corse": { brand: "Bianchi", rim: "Reparto Corse 铝合金轮圈", hubs: "Bianchi 自研", tubeless: "支持真空胎" },
  "Canyon Alexrims": { brand: "Canyon", rim: "Alexrims 铝合金轮圈", hubs: "Canyon 自研", tubeless: "支持真空胎" },
  "DT Swiss Endurance LN": { brand: "DT Swiss", rim: "Endurance LN 铝合金轮圈", hubs: "DT Swiss 370", tubeless: "支持真空胎" },
  "Felt Devox 2.1": { brand: "Felt", rim: "Devox 2.1 铝合金轮圈", hubs: "Felt 自研", tubeless: "支持真空胎" },
  "Wilier Corsa": { brand: "Wilier", rim: "Corsa 铝合金轮圈", hubs: "Wilier 自研", tubeless: "支持真空胎" },
  "Marin Aluminum Disc": { brand: "Marin", rim: "Marin 铝合金碟刹轮圈", hubs: "Marin 自研", tubeless: "支持真空胎" },
  "Triban 铝合金碟刹轮组": { brand: "Decathlon", rim: "Triban 铝合金碟刹轮圈", hubs: "Triban 自研", tubeless: "支持真空胎" },
  "Triban 铝合金轮组": { brand: "Decathlon", rim: "Triban 铝合金轮圈", hubs: "Triban 自研", tubeless: "支持真空胎" },
  "JAVA 铝合金碟刹轮组": { brand: "JAVA", rim: "JAVA 铝合金碟刹轮圈", hubs: "JAVA 自研", tubeless: "支持真空胎" },
  "TWITTER 铝合金碟刹轮组": { brand: "TWITTER", rim: "TWITTER 铝合金碟刹轮圈", hubs: "TWITTER 自研", tubeless: "支持真空胎" },
  "TWITTER 铝合金轮组": { brand: "TWITTER", rim: "TWITTER 铝合金轮圈", hubs: "TWITTER 自研", tubeless: "支持真空胎" },
  "XDS 铝合金碟刹轮组": { brand: "XDS", rim: "XDS 铝合金碟刹轮圈", hubs: "XDS 自研", tubeless: "支持真空胎" },
  "Bontrager Kovee": { brand: "Bontrager", rim: "Kovee 铝合金 29mm 内宽", hubs: "Bontrager 自研", tubeless: "TLR 真空胎" },
  "Cube AM Ride 25": { brand: "Cube", rim: "AM Ride 25 铝合金 25mm 内宽", hubs: "Cube 自研", tubeless: "支持真空胎" },
  "Marin Aluminum 29": { brand: "Marin", rim: "Marin 铝合金 29 吋轮圈", hubs: "Marin 自研", tubeless: "支持真空胎" },
  "Kona Aluminum 29": { brand: "Kona", rim: "Kona 铝合金 29 吋轮圈", hubs: "Kona 自研", tubeless: "支持真空胎" },
  "Kona Aluminum 27.5": { brand: "Kona", rim: "Kona 铝合金 27.5 吋轮圈", hubs: "Kona 自研", tubeless: "支持真空胎" },
  "Rockrider 铝合金碟刹轮组": { brand: "Decathlon", rim: "Rockrider 铝合金碟刹轮圈", hubs: "Rockrider 自研", tubeless: "支持真空胎" },
  "Specialized Stout 29": { brand: "Specialized", rim: "Stout 铝合金 29 吋轮圈", hubs: "Specialized 自研", tubeless: "支持真空胎" },
  "Cannondale Trail 29": { brand: "Cannondale", rim: "Trail 铝合金 29 吋轮圈", hubs: "Cannondale 自研", tubeless: "支持真空胎" },
  "Giant GX 29": { brand: "Giant", rim: "GX 铝合金 29 吋轮圈", hubs: "Giant 自研", tubeless: "支持真空胎" },
  "CADEX Max 40": { brand: "CADEX", rim: "Max 40 碳纤维 40mm", hubs: "CADEX 自研", tubeless: "真空胎系统" },
  "DT Swiss ARC 1100 55": { brand: "DT Swiss", rim: "ARC 1100 Dicut 碳纤维 55mm", hubs: "DT Swiss 180", tubeless: "真空胎系统" },
  "Princeton Peak 4550": { brand: "Princeton", rim: "Peak 4550 碳纤维 45/50mm", hubs: "Princeton CarbonWorks", tubeless: "真空胎系统" },
  "Reserve 57/64": { brand: "Reserve", rim: "57/64 碳纤维前后异径", hubs: "DT Swiss 350", tubeless: "真空胎系统" },
  "Syncros Capital SL": { brand: "Syncros", rim: "Capital SL 碳纤维 40mm", hubs: "DT Swiss 240", tubeless: "真空胎系统" },
  "Roval Terra CLX II": { brand: "Roval", rim: "Terra CLX II 碳纤维 33mm 内宽", hubs: "DT Swiss 180", tubeless: "真空胎系统" },
  "Roval Terra C": { brand: "Roval", rim: "Terra C 碳纤维 33mm 内宽", hubs: "DT Swiss 350", tubeless: "真空胎系统" },
  "Santa Cruz Reserve 28": { brand: "Reserve", rim: "Reserve 28 碳纤维 28mm 内宽", hubs: "DT Swiss 350", tubeless: "真空胎系统" },
  "Santa Cruz Reserve 25": { brand: "Reserve", rim: "Reserve 25 碳纤维 25mm 内宽", hubs: "DT Swiss 350", tubeless: "真空胎系统" },
  "Santa Cruz Reserve 31 DH": { brand: "Reserve", rim: "Reserve 31 DH 碳纤维 31mm 内宽", hubs: "DT Swiss 350", tubeless: "真空胎系统" },
  "Yeti DT Swiss EXC 1501": { brand: "DT Swiss", rim: "EXC 1501 碳纤维 30mm 内宽", hubs: "DT Swiss 240", tubeless: "真空胎系统" },
  "Yeti DT Swiss M 1700": { brand: "DT Swiss", rim: "M 1700 铝合金 30mm 内宽", hubs: "DT Swiss 350", tubeless: "真空胎系统" },
  "Yeti DT Swiss XR 1700": { brand: "DT Swiss", rim: "XR 1700 铝合金 25mm 内宽", hubs: "DT Swiss 350", tubeless: "真空胎系统" },
  "Pivot DT Swiss XM 1700": { brand: "DT Swiss", rim: "XM 1700 铝合金 30mm 内宽", hubs: "DT Swiss 350", tubeless: "真空胎系统" },
  "Pivot DT Swiss XR 1700": { brand: "DT Swiss", rim: "XR 1700 铝合金 25mm 内宽", hubs: "DT Swiss 350", tubeless: "真空胎系统" },
  "e*thirteen LG1": { brand: "e*thirteen", rim: "LG1 铝合金 30mm 内宽", hubs: "e*thirteen 自研", tubeless: "真空胎系统" },
  "Rocky Mountain DT Swiss XM 1700": { brand: "DT Swiss", rim: "XM 1700 铝合金 30mm 内宽", hubs: "DT Swiss 350", tubeless: "真空胎系统" },
  "Rocky Mountain DT Swiss XR 1700": { brand: "DT Swiss", rim: "XR 1700 铝合金 25mm 内宽", hubs: "DT Swiss 350", tubeless: "真空胎系统" },
  "WTB KOM Trail": { brand: "WTB", rim: "KOM Trail 铝合金 29mm 内宽", hubs: "WTB 自研", tubeless: "真空胎系统" },
  "WTB KOM Light": { brand: "WTB", rim: "KOM Light 铝合金 25mm 内宽", hubs: "WTB 自研", tubeless: "真空胎系统" },
  "Marin DT Swiss M 1900": { brand: "DT Swiss", rim: "M 1900 铝合金 30mm 内宽", hubs: "DT Swiss 370", tubeless: "真空胎系统" },
  "Roval Traverse": { brand: "Roval", rim: "Traverse 铝合金 30mm 内宽", hubs: "DT Swiss 350", tubeless: "真空胎系统" },
  "Roval Control": { brand: "Roval", rim: "Control 铝合金 25mm 内宽", hubs: "DT Swiss 350", tubeless: "真空胎系统" },
  "Roval Traverse DH": { brand: "Roval", rim: "Traverse DH 铝合金 30mm 内宽", hubs: "DT Swiss 350", tubeless: "真空胎系统" },
  "Bontrager Line Comp 30": { brand: "Bontrager", rim: "Line Comp 30 铝合金 30mm 内宽", hubs: "Bontrager 自研", tubeless: "TLR 真空胎" },
  "Bontrager Line Pro 30 DH": { brand: "Bontrager", rim: "Line Pro 30 DH 碳纤维 30mm 内宽", hubs: "Bontrager Rapid Drive", tubeless: "TLR 真空胎" },
  "Giant TRX 1": { brand: "Giant", rim: "TRX 1 铝合金 30mm 内宽", hubs: "Giant 自研", tubeless: "真空胎系统" },
  "Giant XCR 1": { brand: "Giant", rim: "XCR 1 铝合金 26mm 内宽", hubs: "Giant 自研", tubeless: "真空胎系统" },
  "Giant AM 29": { brand: "Giant", rim: "AM 29 铝合金 29mm 内宽", hubs: "Giant 自研", tubeless: "真空胎系统" },
  "Canyon DT Swiss XM 1700": { brand: "DT Swiss", rim: "XM 1700 铝合金 30mm 内宽", hubs: "DT Swiss 350", tubeless: "真空胎系统" },
  "Canyon DT Swiss EXC 1501": { brand: "DT Swiss", rim: "EXC 1501 碳纤维 30mm 内宽", hubs: "DT Swiss 240", tubeless: "真空胎系统" },
  "Canyon DT Swiss XR 1700": { brand: "DT Swiss", rim: "XR 1700 铝合金 25mm 内宽", hubs: "DT Swiss 350", tubeless: "真空胎系统" },
  "Canyon AM 29": { brand: "Canyon", rim: "AM 29 铝合金 29mm 内宽", hubs: "Canyon 自研", tubeless: "真空胎系统" },
  "Syncros Silverton SL": { brand: "Syncros", rim: "Silverton SL 碳纤维 30mm 内宽", hubs: "DT Swiss 240", tubeless: "真空胎系统" },
  "Syncros Silverton 2.0": { brand: "Syncros", rim: "Silverton 2.0 铝合金 30mm 内宽", hubs: "Syncros 自研", tubeless: "真空胎系统" },
  "Merida Team SL": { brand: "Merida", rim: "Team SL 碳纤维 25mm 内宽", hubs: "Merida 自研", tubeless: "真空胎系统" },
  "Oquo MC32": { brand: "Oquo", rim: "MC32 碳纤维 32mm 内宽", hubs: "Oquo 自研", tubeless: "真空胎系统" },
  "Oquo MP30": { brand: "Oquo", rim: "MP30 碳纤维 30mm 内宽", hubs: "Oquo 自研", tubeless: "真空胎系统" },
  "Cannondale HollowGram 30": { brand: "Cannondale", rim: "HollowGram 30 碳纤维 30mm 内宽", hubs: "HollowGram 自研", tubeless: "真空胎系统" },
  "Cannondale HollowGram 25": { brand: "Cannondale", rim: "HollowGram 25 碳纤维 25mm 内宽", hubs: "HollowGram 自研", tubeless: "真空胎系统" },
  "Specialized Traverse 29": { brand: "Specialized", rim: "Traverse 铝合金 30mm 内宽", hubs: "Specialized 自研", tubeless: "真空胎系统" },
  "Orbea Oquo XC": { brand: "Oquo", rim: "Oquo XC 碳纤维 30mm 内宽", hubs: "Oquo 自研", tubeless: "真空胎系统" },
  "Orbea OC 29": { brand: "Orbea", rim: "OC 29 铝合金 29mm 内宽", hubs: "Orbea 自研", tubeless: "真空胎系统" },
  "Bontrager Kovee 29": { brand: "Bontrager", rim: "Kovee 铝合金 29mm 内宽", hubs: "Bontrager 自研", tubeless: "TLR 真空胎" },
  "Race Face AR 30": { brand: "Race Face", rim: "AR 30 铝合金 30mm 内宽", hubs: "Race Face 自研", tubeless: "真空胎系统" },
  "WTB KOM 29": { brand: "WTB", rim: "KOM 29 铝合金 29mm 内宽", hubs: "WTB 自研", tubeless: "真空胎系统" },
  "Marin Alloy 27.5": { brand: "Marin", rim: "Marin 铝合金 27.5 吋轮圈", hubs: "Marin 自研", tubeless: "支持真空胎" },
  "Bontrager Kovee RSL": { brand: "Bontrager", rim: "Kovee RSL 碳纤维 30mm 内宽", hubs: "Bontrager Rapid Drive", tubeless: "TLR 真空胎" },
  "Bontrager Kovee Elite": { brand: "Bontrager", rim: "Kovee Elite 铝合金 29mm 内宽", hubs: "Bontrager 自研", tubeless: "TLR 真空胎" },
  "DT Swiss XRC 1700": { brand: "DT Swiss", rim: "XRC 1700 铝合金 25mm 内宽", hubs: "DT Swiss 350", tubeless: "真空胎系统" },
  "Branta 铝合金轮组": { brand: "Branta", rim: "Branta 铝合金碟刹轮圈", hubs: "Branta 自研", tubeless: "支持真空胎" },
};

export function tiresFor(category: Category, discipline: Discipline): string {
  if (category === "road") {
    if (discipline === "gravel") return "Panaracer GravelKing SK 40c 真空胎";
    if (discipline === "endurance" || discipline === "allroad") return "Continental GP5000 AS TR 32c 真空胎";
    return "Continental GP5000 S TR 28c 真空胎";
  }
  if (discipline === "xc") return "Maxxis Rekon Race 29×2.35 真空胎";
  if (discipline === "downcountry") return "Maxxis Dissector 29×2.4 真空胎";
  if (discipline === "trail") return "Maxxis Minion DHF / Dissector 29×2.4 真空胎";
  if (discipline === "enduro") return "Maxxis Assegai / Minion DHR II 29×2.5 真空胎";
  if (discipline === "downhill") return "Maxxis Assegai 29×2.5 DH 真空胎";
  return "Maxxis Ardent Race 29×2.35 真空胎";
}

export function cockpitFor(price: number, category: Category, discipline: Discipline): { bar: string; stem: string; post: string; tape: string } {
  if (category === "road") {
    if (price >= 80000) return { bar: "一体式碳纤维弯把组", stem: "整合式碳纤维把立", post: "碳纤维 D 型座管", tape: "Supacaz Super Sticky Kush" };
    if (price >= 45000) return { bar: "碳纤维弯把", stem: "铝合金把立", post: "碳纤维座管", tape: "Supacaz Super Sticky Kush" };
    if (price >= 22000) return { bar: "铝合金弯把", stem: "铝合金把立", post: "碳纤维座管", tape: "Prologo Onetouch" };
    return { bar: "铝合金弯把", stem: "铝合金把立", post: "铝合金座管", tape: "Prologo Onetouch" };
  }
  const wide = discipline === "downhill" || discipline === "enduro" ? 800 : discipline === "xc" ? 760 : 780;
  const bar = price >= 60000 ? `碳纤维燕把 ${wide}mm` : price >= 30000 ? `铝合金燕把 ${wide}mm` : `铝合金燕把 ${wide}mm`;
  const stem = price >= 60000 ? "CNC 铝合金把立 45mm" : "铝合金把立 50mm";
  const post = price >= 60000 ? "碳纤维座管" : "铝合金座管";
  return { bar, stem, post, tape: "锁环把套" };
}
