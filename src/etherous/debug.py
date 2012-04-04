"""
  debug.py

  code executed near end of init when in dev/debug mode
"""

from etherous import app
from flaskext.gae_mini_profiler import GAEMiniProfiler

# run profiler
GAEMiniProfiler(app)
