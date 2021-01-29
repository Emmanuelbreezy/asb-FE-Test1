import React from "react";
import logo from '../../assets/images/asb-logo.png';
import MenuItem from "../UI/MenuItem/MenuItem";

export const Header = (props:any) => {

    return (
      <div className="relative z-50 mb-14 ">
          <div className="fixed w-full shadow-sm flex flex-row items-center justify-between bg-background-primary">
              <div className="flex-1 flex items-center justify-start space-x-12">
                <div className="flex items-center space-x-1 pl-4">
                  <img className="w-6 h-6" src={logo}  />
                  <h2 className="hidden sm:hidden md:flex text-logo font-bold ">FE Engineer Test</h2>
                </div>
                <ul className="hidden lg:flex lg:items-center space-x-3 list-none">
                  <li>
                    <MenuItem 
                        active={false} 
                        name="Home" 
                        iconPath={<path fillRule="evenodd" clip-rule="evenodd" d="M6.02708 0.152083C6.12674 0.0546 6.2606 9.08441e-06 6.4 0C6.53415 0.000418845 6.66321 0.0513739 6.76146 0.142708L10.1333 2.90104V2.13333C10.1333 1.83893 10.3723 1.6 10.6667 1.6H11.2C11.4944 1.6 11.7333 1.83893 11.7333 2.13333V4.20937L12.5854 4.90625C12.598 4.91577 12.6102 4.92585 12.6219 4.93646L12.6302 4.94271C12.7386 5.04369 12.8001 5.18519 12.8 5.33333C12.8 5.62789 12.5612 5.86667 12.2667 5.86667H11.7333V11.7333C11.7333 12.3227 11.256 12.8 10.6667 12.8H2.13333C1.544 12.8 1.06667 12.3227 1.06667 11.7333V5.86667H0.533333C0.238781 5.86667 0 5.62789 0 5.33333C0.000180116 5.18556 0.0616657 5.04448 0.169792 4.94375V4.94271L0.189583 4.92604C0.196057 4.92068 0.202656 4.91547 0.209375 4.91042L6.02708 0.152083ZM10.1333 6.93333H8V11.2H10.1333V6.93333Z" fill="#72809D"/>} 
                    />
                  </li>
                  <li>
                    <MenuItem 
                          active={false} 
                          name="Entries" 
                          iconPath={<path fillRule="evenodd" clip-rule="evenodd" d="M1.06667 0C0.477333 0 0 0.477333 0 1.06667V2.13333H12.8V1.06667C12.8 0.477333 12.3227 0 11.7333 0H1.06667ZM0.533333 3.2V10.6667C0.533333 11.256 1.01067 11.7333 1.6 11.7333H11.2C11.7893 11.7333 12.2667 11.256 12.2667 10.6667V3.2H0.533333ZM8 4.8H4.8C4.5056 4.8 4.26667 5.03893 4.26667 5.33333C4.26667 5.62773 4.5056 5.86667 4.8 5.86667H8C8.2944 5.86667 8.53333 5.62773 8.53333 5.33333C8.53333 5.03893 8.2944 4.8 8 4.8Z" fill="#72809D"/>} 
                      />
                 </li>
                 <li>
                  <MenuItem 
                          active={true} 
                          name="Divisions" 
                          iconPath={(<>
                            <path d="M6.26662 2C5.67728 2 5.19995 2.47733 5.19995 3.06667V12.6667C5.19995 13.256 5.67728 13.7333 6.26662 13.7333H10.5333C11.1226 13.7333 11.6 13.256 11.6 12.6667V3.06667C11.6 2.47733 11.1226 2 10.5333 2H6.26662Z" fill="#006FD6"/>
                            <path d="M3.06667 3.06668C2.47733 3.06668 2 3.54401 2 4.13335V11.6C2 12.1893 2.47733 12.6667 3.06667 12.6667H4.13333V3.06668H3.06667Z" fill="#006FD6"/>
                            <path d="M12.6667 3.06668V12.6667H13.7334C14.3227 12.6667 14.8001 12.1893 14.8001 11.6V4.13335C14.8001 3.54401 14.3227 3.06668 13.7334 3.06668H12.6667Z" fill="#006FD6"/>
                             </>)} 
                      />
                  </li>
                </ul>
              </div>
              <div className="pr-5 flex items-center space-x-4 py-1 lg:py-0">
                <div className="relative flex flex-1  items-center lg:flex-0 lg:w-40 ">
                  <input className="w-full h-full pl-8 py-1.5 border border-barcolor 
                    focus:border-none focus:ring-1 focus:ring-gray-50 focus:outline-none rounded-md" type="text" />
                  <svg className="absolute left-3 top-3 w-4 h-4 fill-current" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clip-rule="evenodd" d="M6.5 13C2.91015 13 0 10.0899 0 6.5C0 2.91015 2.91015 0 6.5 0C10.0899 0 13 2.91015 13 6.5C13 7.99347 12.4963 9.36929 11.6496 10.4669L15.7211 14.3742C16.093 14.7461 16.093 15.3491 15.7211 15.7211C15.3491 16.093 14.7461 16.093 14.3742 15.7211L10.2779 11.79C9.21322 12.5517 7.90896 13 6.5 13ZM6.5 11C8.98528 11 11 8.98528 11 6.5C11 4.01472 8.98528 2 6.5 2C4.01472 2 2 4.01472 2 6.5C2 8.98528 4.01472 11 6.5 11Z" fill="#72809D"/>
                  </svg>

                </div>
                <button className="p-3 focus:outline-none text-secondary">
                  <svg  className="w-5 h-5 fill-current" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <path fill-rule="evenodd" clip-rule="evenodd" d="M6.49608 1.4336C6.49608 0.641536 7.13761 0 7.92968 0C8.72174 0 9.36328 0.641536 9.36328 1.4336V1.6212C11.835 2.25885 13.6641 4.49724 13.6641 7.168V8.8844C13.6641 10.0241 13.8981 11.1448 14.3347 12.1856H1.52468C1.96121 11.1441 2.19528 10.0241 2.19528 8.8844V7.168C2.19528 4.49724 4.02437 2.25885 6.49608 1.6212V1.4336ZM0.132407 13.9746C0.262726 13.7514 0.503173 13.6155 0.761677 13.6192H7.92968H15.0977C15.3562 13.6155 15.5966 13.7514 15.7269 13.9746C15.8573 14.1979 15.8573 14.4741 15.7269 14.6974C15.5966 14.9206 15.3562 15.0565 15.0977 15.0528H9.95548C10.0374 15.2829 10.0796 15.5253 10.0801 15.7696C10.0801 16.9572 9.11731 17.92 7.92968 17.92C6.74204 17.92 5.77928 16.9572 5.77928 15.7696C5.78025 15.5252 5.82286 15.2828 5.90528 15.0528H0.761677C0.503173 15.0565 0.262726 14.9206 0.132407 14.6974C0.00208827 14.4741 0.00208827 14.1979 0.132407 13.9746Z" fill="#72809D"/>
                  </svg>
                </button>
                <button className="flex items-center space-x-2 focus:outline-none">
                   <span className="w-10 h-10 inline-block  align-middle  rounded-full p-2 bg-background-accent text-accent-80">
                    <svg className="w-5 h-5 text-center ml-0.5 mt-0.5 fill-current"  viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" clip-rule="evenodd" d="M3.52009 4.224C3.52009 1.89094 5.41103 0 7.74409 0C10.0771 0 11.9681 1.89094 11.9681 4.224V4.928C11.9681 7.26106 10.0771 9.152 7.74409 9.152C5.41103 9.152 3.52009 7.26106 3.52009 4.928V4.224ZM0.262713 14.1433C1.30393 12.7895 4.92249 11.264 7.74271 11.264C10.5629 11.264 14.1829 12.7902 15.2241 14.1433C15.8675 14.9803 15.255 16.192 14.1997 16.192H1.28709C0.231792 16.192 -0.380743 14.9803 0.262713 14.1433Z" fill="#72809D"/>
                    </svg>
                   </span>
                   <svg className="w-3 h-3 fill-current ml-0.5" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5.6315 4.1315L1.8105 0.3105C1.3965 -0.1035 0.7245 -0.1035 0.3105 0.3105C-0.1035 0.7245 -0.1035 1.3965 0.3105 1.8105L4.9245 6.4245C5.3155 6.8155 5.9485 6.8155 6.3385 6.4245L10.9525 1.8105C11.3665 1.3965 11.3665 0.7245 10.9525 0.3105C10.5385 -0.1035 9.8665 -0.1035 9.4525 0.3105L5.6315 4.1315Z" fill="#72809D"/>
                    </svg>
                </button>
              </div>
          </div>
      </div>
    )
}