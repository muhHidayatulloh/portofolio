const ComingSoon = () => {
  return (
    <div class="text-center px-4">
      <h1 class="display-3 fw-bold mb-3">🚧 Coming Soon</h1>
      <p class="lead mb-4">
        We’re working hard to launch feature. Stay tuned!
      </p>

      <div class="mb-4">
        <div class="spinner-border text-warning" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      </div>

      <p class="small text-muted">
        Launching 2025 • Thank you for your patience 🙏
      </p>
    </div>
  );
};

export default ComingSoon;
