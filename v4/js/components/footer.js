function renderFooter() {
  return `
    <footer class="py-8 border-t border-border bg-background">
      <div class="container flex flex-col md:flex-row items-center justify-between gap-4">
        <p class="text-muted-foreground text-sm">
          © 2026 Dinesh Wadhwani. All Rights Reserved.
        </p>
        <div class="flex gap-4">
          <a href="#" class="text-muted-foreground hover:text-foreground text-sm">LinkedIn</a>
          <a href="#" class="text-muted-foreground hover:text-foreground text-sm">Twitter</a>
        </div>
      </div>
    </footer>
  `;
}
