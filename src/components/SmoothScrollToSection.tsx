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