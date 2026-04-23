// export function smoothScrollToSection(
//     event: React.MouseEvent,
//     sectionId: string,
//     // offset: 0,
//     offset: number = 0,
// ) {
//     if (window.location.pathname === '/') {
//         event.preventDefault();
//         const targetElement = document.getElementById(sectionId.toLowerCase());
//         if (targetElement) {
//             const elementPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
//             const offsetPosition = elementPosition - offset;
//             window.scrollTo({
//                 top: offsetPosition,
//                 behavior: 'smooth'
//             })
//         }
//     }
// }

export function smoothScrollToSection(
    event: React.MouseEvent,
    sectionId: string,
    offset: number = 0
  ) {
    event.preventDefault();
  
    const targetElement = document.getElementById(sectionId);
  
    if (!targetElement) {
      console.log('Element not found:', sectionId);
      return;
    }
  
    const elementPosition =
      targetElement.getBoundingClientRect().top + window.pageYOffset;
  
    window.scrollTo({
      top: elementPosition - offset,
      behavior: 'smooth',
    });
  }