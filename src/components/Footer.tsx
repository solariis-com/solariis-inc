import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";
import { translations } from "../translations";

const Footer = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <footer className="bg-accent mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 3194 757">
              <path className="fill-current" d="M1318.9 207.264Q1281.53 191.389 1244.65 191.389Q1169.9 191.389 1169.9 246.764Q1169.9 270.764 1186.78 291.514Q1203.78 312.264 1227.78 328.389Q1251.9 344.514 1275.9 361.389Q1300.03 378.264 1316.9 401.889Q1333.78 425.389 1333.78 453.014Q1333.78 499.639 1302.53 523.514Q1271.28 547.264 1216.28 547.264Q1161.28 547.264 1122.28 519.139L1134.65 500.639Q1171.53 524.764 1215.53 524.764Q1259.53 524.764 1283.03 507.139Q1306.65 489.389 1306.65 456.139Q1306.65 433.139 1289.78 412.389Q1272.9 391.639 1248.78 375.014Q1224.78 358.389 1200.65 341.014Q1176.65 323.514 1159.65 299.514Q1142.78 275.389 1142.78 247.764Q1142.78 211.389 1169.65 190.139Q1196.53 168.889 1242.4 168.889Q1288.28 168.889 1327.65 187.389L1318.9 207.264Z"/>
              <path className="fill-current" d="M424.592 0.399104C369.082 6.26119 375.534 78.0469 408.516 101.685C398.822 100.045 352.265 84.2789 338.05 84.1887C274.478 41.4638 359.158 25.9982 321.664 43.9246C312.151 62.4512 338.441 81.2077 356.037 66.6427C390.059 -30.782 222.809 16.4548 317.023 108.158C202.292 128.614 220.438 33.0607 250.77 69.5137C221.379 63.9917 233.063 97.1238 260.102 92.382C328.227 9.39231 140.21 29.4494 226.16 114.84C268.056 144.471 323.245 105.226 370.382 123.333C387.628 127.964 426.942 159.286 399.322 168.459C362.059 106.687 284.811 131.076 229.052 150.082C169.34 177.222 133.728 111.879 173.162 114.129C178.874 116.831 172.772 129.375 181.215 124.243C184.636 80.9178 125.935 119.441 158.447 150.122C181.275 179.443 273.067 139.018 216.177 169.089C148.483 201.961 87.8215 79.8477 177.373 90.3313C204.233 97.4433 200.541 146.731 173.542 132.866C164.219 118.781 161.327 152.403 189.767 141.539C223.29 125.074 195.32 79.0771 166.499 76.7165C90.8023 84.1887 111.84 188.096 197.18 185.515C177.343 208.413 110.48 241.995 94.9339 198.52C104.567 183.474 97.7645 198.14 106.348 204.562C167.58 223.069 139.74 134.617 90.5922 156.274C20.9674 204.492 108.988 291.563 170.581 253.329C173.572 250.658 187.197 243.446 188.387 247.197C181.684 264.733 180.314 252.029 167.98 260.542C134.628 267.634 14.395 337.149 44.5758 254.68C59.141 248.978 30.6409 265.393 46.3264 278.258C125.655 294.233 43.9756 189.067 10.1736 253.359C-5.40198 297.335 37.4433 336.739 80.4385 328.626C70.8452 353.575 78.6079 390.448 46.5165 400.261C-6.53239 416.478 14.4651 305.448 43.6255 367.46C32.7116 344.251 6.98242 380.605 36.0327 385.526C77.3076 373.772 33.4819 306.828 6.18214 353.515C-7.27266 376.523 1.95063 401.222 26.5694 414.107C-15.0454 424 4.51154 473.698 37.4133 478.719C-14.4252 521.955 72.0156 569.102 105.767 527.257C114.851 515.753 111.309 519.874 113.15 529.698C115.401 541.692 121.803 552.075 119.102 564.68C95.7741 531.508 50.0677 564.84 64.833 596.321C81.349 632.904 137.459 624.331 145.191 586.497C154.345 598.922 166.299 603.013 178.494 609.236C271.797 706.34 65.5633 696.587 150.884 619.69C188.857 612.387 196.96 661.294 160.187 661.815C148.023 658.964 147.022 639.136 160.497 642.007C174.722 668.457 172.702 614.388 148.133 638.886C130.786 708.702 240.676 648.38 167.259 611.556C77.8875 602.314 139.71 736.661 196.89 680.431C193.699 772.187 327.306 793.219 319.073 679.771C421.04 716.844 450.96 620.39 478.5 650.181C518.395 674.109 615.739 696.727 609.027 628.163C598.293 609.496 606.066 598.652 618.68 584.037C613.328 560.519 610.738 562.339 618.68 537.811C602.104 514.672 597.663 542.122 587.489 538.931C573.434 534.519 585.679 529.968 561.1 529.798C527.338 568.051 526.247 534.56 516.114 553.976C516.654 561.189 523.716 564.7 525.587 555.427C542.903 568.492 563.251 608.326 591.111 598.072C622.242 670.418 563.231 669.287 509.461 650.661C429.213 621.03 509.051 592.22 463.415 527.297C457.593 517.383 438.776 494.826 424.581 490.694C383.196 472.368 448.639 466.425 436.375 399.691C494.826 403.063 453.281 403.092 500.598 426.121C525.447 443.317 603.655 419.698 578.206 382.936C619.981 392.418 618.25 415.377 621.652 452.1C617.99 470.286 630.124 497.686 613.928 509.08C606.246 504.989 599.834 497.796 590.33 503.008C564.451 525.446 571.674 473.398 594.962 482.231C602.304 481.91 600.964 476.879 594.902 475.278C553.647 464.415 552.637 515.713 581.387 521.375C586.609 522.405 589.95 519.784 594.272 518.104C600.974 526.926 608.107 516.013 613.629 525.516C681.402 543.462 635.896 483.611 670.929 481.15C694.187 483.411 728.889 501.688 707.702 530.978C706.742 533.018 699.209 536.35 698.999 532.488C720.196 449.899 606.416 551.096 701.65 562.729C743.335 552.466 743.616 502.668 718.846 476.388C752.618 487.432 792.595 532.318 832.543 502.438C858.785 487.952 874.022 454.481 864.177 430.132C908.496 444.267 942.756 382.265 902.194 355.966C1020.15 327.185 908.651 213.645 826.027 286.201C853.046 136.178 983.429 204.632 914.746 234.122C904.761 226.6 921.351 220.638 911.928 217.096C879.184 230.141 922.017 253.67 937.594 235.382C957.941 144.741 828.527 189.576 826.101 254.24C817.462 292.483 790.938 328.336 754.8 350.063C825.797 286.081 799.548 229.391 856.522 184.055C942.054 116.33 988.414 281.119 899.561 241.745C885.442 226.709 901.174 196.599 918.918 214.325C922.912 219.307 916.1 224.499 919.62 228.18C926.913 230.161 927.608 223.838 929.339 219.697C911.351 170.35 862.106 229.341 899.621 253.559C977.978 280.548 971.277 164.137 903.37 161.566C811.7 126.654 780.798 410.775 750.295 283.87C730.97 265.904 717.685 208.893 758.513 220.837C724.178 230.311 751.508 277.448 783.927 249.658C810.036 228.69 777.418 178.502 740.606 189.027C681.093 204.352 717.625 287.951 675.23 150.352C676.761 61.3507 757.129 139.248 710.543 132.866C718.756 120.832 707.522 118.301 695.058 120.002C673.6 138.728 697.879 172.68 725.889 163.787C801.175 102.896 665.417 29.5294 640.788 142.69C620.941 119.801 577.066 92.0418 602.215 59.7902C630.964 45.255 593.741 69.8237 607.136 88.3907C622.271 97.7635 619.621 99.4844 640.018 94.2722C700.87 -0.581338 514.123 6.02102 582.918 128.505C569.733 124.884 521.916 91.0612 515.744 82.5684C496.597 64.1217 502.919 15.0842 536.761 36.5819C537.752 44.8549 537.621 41.9138 531.719 39.0828C507.641 29.3093 508.371 58.9998 520.205 71.5544C554.267 95.2225 581.597 41.1836 552.887 18.8756C493.986 -33.7632 451.821 59.3 496.017 104.316C375.733 110.518 402.923 -19.1279 439.736 42.3539C424.291 5.78093 404.444 74.8758 449.45 63.5315C492.605 46.0853 455.292 -4.82285 424.591 0.399015L424.592 0.399104Z"/>
            </svg>
            <p className="text-text-light">
              {t.footer.description}
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-text">{t.footer.quickLinks}</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-text-light hover:text-text transition-colors">
                  {t.nav.home}
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-text-light hover:text-text transition-colors">
                  {t.nav.about}
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-text-light hover:text-text transition-colors">
                  {t.nav.products}
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-text-light hover:text-text transition-colors">
                  {t.nav.contact}
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-text">{t.footer.contact}</h4>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2 text-text-light">
                <Mail size={16} />
                <span>info@solariis.com</span>
              </li>
              <li className="flex items-center space-x-2 text-text-light">
                <Phone size={16} />
                <span>+58 (412) 0907684</span>
              </li>
              <li className="flex items-center space-x-2 text-text-light">
                <MapPin size={16} />
                <span>Nueva Esparta, Campiña, T-5, Venezuela</span>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-text">{t.footer.newsletter.title}</h4>
            <p className="text-text-light">{t.footer.newsletter.description}</p>
            <form className="space-y-2">
              <input
                type="email"
                placeholder={t.footer.newsletter.placeholder}
                className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <button
                type="submit"
                className="w-full bg-primary hover:bg-primary-dark text-text px-4 py-2 rounded-lg transition-colors"
              >
                {t.footer.newsletter.subscribe}
              </button>
            </form>
          </div>

        </div>

        <div className="mt-8 pt-8 border-t border-gray-200">
          <p className="text-center text-text-light">
            © 2025 Solariis Venezuela C.A. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
